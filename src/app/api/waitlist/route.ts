import { NextRequest, NextResponse } from "next/server"
import { getSupabasePublic } from "@/lib/supabase-public"
import { sendWaitlistConfirmationEmail } from "@/lib/email"

function normalizeWhatsApp(raw: string): string | null {
  const digits = raw.replace(/\D/g, "")
  if (digits.startsWith("55") && (digits.length === 12 || digits.length === 13)) {
    return digits
  }
  if (digits.length === 10 || digits.length === 11) {
    return `55${digits}`
  }
  return null
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { nome, email, whatsapp, area_de_estudo, lgpd_consent, utm_source, utm_medium, utm_campaign, utm_content } = body

    if (!nome || !email || !whatsapp || !area_de_estudo) {
      return NextResponse.json({ success: false, message: "Preencha todos os campos." }, { status: 400 })
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ success: false, message: "Email inválido." }, { status: 400 })
    }

    if (!lgpd_consent) {
      return NextResponse.json({ success: false, message: "Você precisa concordar com a política de privacidade." }, { status: 400 })
    }

    if (!["medicina", "odontologia", "outro"].includes(area_de_estudo)) {
      return NextResponse.json({ success: false, message: "Área de estudo inválida." }, { status: 400 })
    }

    const normalizedWhatsApp = normalizeWhatsApp(whatsapp)
    if (!normalizedWhatsApp) {
      return NextResponse.json({ success: false, message: "Número de WhatsApp inválido. Use o formato (XX) XXXXX-XXXX." }, { status: 400 })
    }

    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown"

    const supabase = getSupabasePublic()
    const { data, error } = await supabase.rpc("insert_waitlist_lead", {
      p_nome: nome.trim(),
      p_email: email.trim().toLowerCase(),
      p_whatsapp: normalizedWhatsApp,
      p_area_de_estudo: area_de_estudo,
      p_utm_source: utm_source || null,
      p_utm_medium: utm_medium || null,
      p_utm_campaign: utm_campaign || null,
      p_utm_content: utm_content || null,
      p_ip_address: ip,
    })

    if (error) {
      console.error("[waitlist POST] supabase rpc error:", error)
      return NextResponse.json({ success: false, message: "Erro ao inserir. Tente novamente." }, { status: 500 })
    }

    const result = Array.isArray(data) ? data[0] : data
    const position = result?.lead_position
    const isDuplicate = result?.is_duplicate

    if (isDuplicate) {
      return NextResponse.json({
        success: true,
        duplicate: true,
        position,
        message: "Você já está na lista de espera do Bookim! Fique tranquilo, vamos te avisar no lançamento.",
      })
    }

    const { data: countData } = await supabase.rpc("get_waitlist_count")
    const totalCount = countData ?? 0

    try {
      await sendWaitlistConfirmationEmail({
        to: email.trim().toLowerCase(),
        name: nome.trim(),
        position,
      })
    } catch (emailErr) {
      // Don't fail the signup if email fails — but log so we can diagnose
      console.error("[waitlist POST] email send failed:", {
        to: email.trim().toLowerCase(),
        position,
        error: emailErr instanceof Error ? emailErr.message : String(emailErr),
      })
    }

    return NextResponse.json({
      success: true,
      position,
      totalCount,
    })
  } catch (err) {
    console.error("[waitlist POST] error:", err)
    return NextResponse.json({ success: false, message: "Erro interno. Tente novamente." }, { status: 500 })
  }
}

export async function GET() {
  try {
    const { data } = await getSupabasePublic().rpc("get_waitlist_count")
    const count = data ?? 0

    return NextResponse.json(
      { count },
      {
        headers: {
          "Cache-Control": "public, s-maxage=30, stale-while-revalidate=60",
        },
      }
    )
  } catch {
    return NextResponse.json({ count: 0 })
  }
}
