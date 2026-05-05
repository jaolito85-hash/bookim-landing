import { NextRequest, NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/supabase-admin"
import { generateTempPassword } from "@/lib/password"
import { sendWelcomeEmail, sendSubscriptionCancelledEmail } from "@/lib/email"

// Mapping Hotmart offer codes to plan types
const OFFER_TO_PLAN: Record<string, "monthly" | "annual"> = {
  cfgh44v8: "monthly",
  bryfks8g: "annual",
}

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 })
  }

  try {
    // 1. Validate hottok
    const hottok = body.hottok as string | undefined
    if (!hottok || hottok !== process.env.HOTMART_HOTTOK) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // 2. Log the webhook
    const eventType = (body.event as string) || "unknown"
    await logWebhook(eventType, body, "received")

    // 3. Route by event type
    switch (eventType) {
      case "PURCHASE_APPROVED":
      case "PURCHASE_COMPLETE":
        await handlePurchase(body)
        break
      case "PURCHASE_CANCELED":
      case "SUBSCRIPTION_CANCELLATION":
        await handleCancellation(body)
        break
      case "PURCHASE_REFUNDED":
      case "PURCHASE_CHARGEBACK":
      case "PURCHASE_PROTEST":
        await handleRefund(body)
        break
      default:
        await logWebhook(eventType, body, "ignored")
        break
    }

    return NextResponse.json({ received: true }, { status: 200 })
  } catch (error) {
    console.error("Webhook processing error:", error)
    const message = error instanceof Error ? error.message : "Unknown error"
    await logWebhook(
      (body.event as string) || "unknown",
      body,
      "failed",
      message
    ).catch(() => {})

    // Return 200 to prevent Hotmart from retrying endlessly
    return NextResponse.json({ received: true }, { status: 200 })
  }
}

// ─── Purchase Handler ────────────────────────────────────────

async function handlePurchase(body: Record<string, unknown>) {
  const data = body.data as Record<string, unknown> | undefined
  const buyer = data?.buyer as Record<string, unknown> | undefined
  const purchase = data?.purchase as Record<string, unknown> | undefined
  const subscription = data?.subscription as Record<string, unknown> | undefined

  const email = (buyer?.email as string)?.toLowerCase().trim()
  const name = (buyer?.name as string) || email?.split("@")[0] || "Estudante"
  const transactionId = purchase?.transaction as string
  const offerCode = (purchase?.offer as Record<string, unknown>)?.code as string
  const subscriptionCode = subscription?.code as string | undefined

  if (!email || !transactionId) {
    throw new Error("Missing buyer email or transaction ID in webhook payload")
  }

  // Determine plan type from offer code
  const planType = OFFER_TO_PLAN[offerCode] || "monthly"

  // Idempotency check — skip if this transaction was already processed
  const { data: existingSub } = await supabaseAdmin
    .from("subscriptions")
    .select("id")
    .eq("hotmart_transaction_id", transactionId)
    .maybeSingle()

  if (existingSub) {
    await logWebhook("PURCHASE", body, "ignored", "Duplicate transaction")
    return
  }

  // Check if user already exists via helper function
  const { data: existingUsers } = await supabaseAdmin.rpc("get_user_by_email", {
    lookup_email: email,
  })

  let userId: string
  let isNewUser = false

  if (existingUsers && existingUsers.length > 0) {
    // Reactivation — user already has an account
    userId = existingUsers[0].id
  } else {
    // New user — create with temp password
    isNewUser = true
    const tempPassword = generateTempPassword()

    const { data: newUser, error: createError } =
      await supabaseAdmin.auth.admin.createUser({
        email,
        password: tempPassword,
        email_confirm: true, // Skip email verification since they paid
        user_metadata: { full_name: name },
      })

    if (createError) {
      throw new Error(`Failed to create user: ${createError.message}`)
    }

    userId = newUser.user.id

    // Set must_change_password flag on profile
    // (profile is auto-created by the handle_new_user trigger)
    await supabaseAdmin
      .from("profiles")
      .update({ must_change_password: true })
      .eq("id", userId)

    // Send welcome email with temp credentials
    await sendWelcomeEmail({ to: email, name, tempPassword, planType })
  }

  // Calculate expiration date
  const now = new Date()
  const expiresAt = new Date(now)
  if (planType === "annual") {
    expiresAt.setFullYear(expiresAt.getFullYear() + 1)
  } else {
    expiresAt.setMonth(expiresAt.getMonth() + 1)
  }

  // Create subscription record
  const { error: insertError } = await supabaseAdmin
    .from("subscriptions")
    .insert({
      user_id: userId,
      hotmart_transaction_id: transactionId,
      hotmart_subscription_id: subscriptionCode || null,
      plan_type: planType,
      status: "active",
      started_at: now.toISOString(),
      expires_at: expiresAt.toISOString(),
    })

  if (insertError) {
    throw new Error(`Failed to create subscription: ${insertError.message}`)
  }

  await logWebhook("PURCHASE", body, "processed")

  if (!isNewUser) {
    // TODO: consider sending a "reactivation" email for returning users
  }
}

// ─── Cancellation Handler ────────────────────────────────────

async function handleCancellation(body: Record<string, unknown>) {
  const data = body.data as Record<string, unknown> | undefined
  const subscriptionCode = (data?.subscription as Record<string, unknown>)
    ?.code as string | undefined
  const email = (data?.buyer as Record<string, unknown>)?.email as
    | string
    | undefined
  const name = ((data?.buyer as Record<string, unknown>)?.name as string) || ""

  if (subscriptionCode) {
    await supabaseAdmin
      .from("subscriptions")
      .update({
        status: "cancelled",
        cancelled_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })
      .eq("hotmart_subscription_id", subscriptionCode)
      .eq("status", "active")
  }

  if (email) {
    await sendSubscriptionCancelledEmail({
      to: email.toLowerCase().trim(),
      name,
    }).catch(console.error)
  }

  await logWebhook("CANCELLATION", body, "processed")
}

// ─── Refund Handler ──────────────────────────────────────────

async function handleRefund(body: Record<string, unknown>) {
  const data = body.data as Record<string, unknown> | undefined
  const transactionId = (data?.purchase as Record<string, unknown>)
    ?.transaction as string | undefined

  if (transactionId) {
    await supabaseAdmin
      .from("subscriptions")
      .update({
        status: "refunded",
        updated_at: new Date().toISOString(),
      })
      .eq("hotmart_transaction_id", transactionId)
  }

  await logWebhook("REFUND", body, "processed")
}

// ─── Webhook Logger ──────────────────────────────────────────

async function logWebhook(
  eventType: string,
  payload: Record<string, unknown>,
  status: string,
  errorMessage?: string
) {
  await supabaseAdmin.from("webhook_logs").insert({
    source: "hotmart",
    event_type: eventType,
    payload,
    processing_status: status,
    error_message: errorMessage || null,
  })
}
