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

    // CSV column order (header row uses friendly names, but we read from
    // the SQL function fields including `lead_position` which we expose
    // as `position` in the CSV).
    const fieldMap: Array<[string, string]> = [
      ["lead_position", "position"],
      ["nome", "nome"],
      ["email", "email"],
      ["whatsapp", "whatsapp"],
      ["area_de_estudo", "area_de_estudo"],
      ["utm_source", "utm_source"],
      ["utm_medium", "utm_medium"],
      ["utm_campaign", "utm_campaign"],
      ["utm_content", "utm_content"],
      ["created_at", "created_at"],
    ]

    const rows: string[] = [fieldMap.map(([, label]) => label).join(",")]
    for (const row of (data as Record<string, unknown>[]) || []) {
      rows.push(fieldMap.map(([key]) => escapeCsv(row[key])).join(","))
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
