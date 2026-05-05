import { NextResponse } from "next/server"
import { getSupabasePublic } from "@/lib/supabase-public"
import { isAdminAuthenticated } from "@/lib/admin-auth"

function escapeCsv(value: unknown): string {
  if (value === null || value === undefined) return ""
  const str = String(value)
  if (str.includes(",") || str.includes('"') || str.includes("\n")) {
    return `"${str.replace(/"/g, '""')}"`
  }
  return str
}

/**
 * Format a Brazilian WhatsApp number from a digits-only string like
 * "5511991234567" to "+55 (11) 99123-4567".
 * Excel won't auto-convert because of the parens/dash.
 */
function formatWhatsApp(raw: unknown): string {
  if (raw === null || raw === undefined) return ""
  const digits = String(raw).replace(/\D/g, "")
  // Mobile: 13 digits (55 + DDD + 9XXXXXXXX)
  if (digits.length === 13 && digits.startsWith("55")) {
    return `+55 (${digits.slice(2, 4)}) ${digits.slice(4, 9)}-${digits.slice(9)}`
  }
  // Landline: 12 digits (55 + DDD + XXXXXXXX)
  if (digits.length === 12 && digits.startsWith("55")) {
    return `+55 (${digits.slice(2, 4)}) ${digits.slice(4, 8)}-${digits.slice(8)}`
  }
  // Fallback: prefix with apostrophe so Excel keeps as text
  return `'${digits}`
}

/**
 * Format ISO timestamp to Brazilian "DD/MM/YYYY HH:MM" so Excel doesn't
 * mangle it into a US-formatted date.
 */
function formatDateBR(raw: unknown): string {
  if (!raw) return ""
  const d = new Date(String(raw))
  if (Number.isNaN(d.getTime())) return String(raw)
  const pad = (n: number) => n.toString().padStart(2, "0")
  return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())}`
}

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const supabase = getSupabasePublic()
    const { data, error } = await supabase.rpc("get_waitlist_export")
    if (error) {
      console.error("[admin/export-csv] error:", error)
      return NextResponse.json({ error: "Database error" }, { status: 500 })
    }

    // CSV column definition: source field, header label, and optional formatter.
    type ColDef = [string, string, ((v: unknown) => string)?]
    const columns: ColDef[] = [
      ["lead_position", "position"],
      ["nome", "nome"],
      ["email", "email"],
      ["whatsapp", "whatsapp", formatWhatsApp],
      ["area_de_estudo", "area_de_estudo"],
      ["utm_source", "utm_source"],
      ["utm_medium", "utm_medium"],
      ["utm_campaign", "utm_campaign"],
      ["utm_content", "utm_content"],
      ["created_at", "created_at", formatDateBR],
    ]

    const rows: string[] = [columns.map(([, label]) => label).join(",")]
    for (const row of (data as Record<string, unknown>[]) || []) {
      rows.push(
        columns
          .map(([key, , formatter]) => {
            const raw = row[key]
            const value = formatter ? formatter(raw) : raw
            return escapeCsv(value)
          })
          .join(",")
      )
    }

    const csv = "﻿" + rows.join("\n") // BOM for Excel UTF-8 compatibility
    const filename = `bookim-waitlist-${new Date().toISOString().slice(0, 10)}.csv`

    return new NextResponse(csv, {
      status: 200,
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control": "no-store",
      },
    })
  } catch (err) {
    console.error("[admin/export-csv] error:", err)
    return NextResponse.json({ error: "Internal error" }, { status: 500 })
  }
}
