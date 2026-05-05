import { NextResponse } from "next/server"
import { getSupabasePublic } from "@/lib/supabase-public"
import { isAdminAuthenticated } from "@/lib/admin-auth"

export async function GET(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const url = new URL(request.url)
    const limit = Math.min(parseInt(url.searchParams.get("limit") || "100", 10), 500)
    const offset = Math.max(parseInt(url.searchParams.get("offset") || "0", 10), 0)
    const filterArea = url.searchParams.get("area") || null
    const filterSource = url.searchParams.get("source") || null
    const days = Math.min(Math.max(parseInt(url.searchParams.get("days") || "14", 10), 1), 90)

    const supabase = getSupabasePublic()

    const [statsRes, dailyRes, sourcesRes, leadsRes] = await Promise.all([
      supabase.rpc("get_waitlist_admin_stats"),
      supabase.rpc("get_waitlist_daily", { p_days: days }),
      supabase.rpc("get_waitlist_sources"),
      supabase.rpc("get_waitlist_leads_admin", {
        p_limit: limit,
        p_offset: offset,
        p_filter_area: filterArea,
        p_filter_source: filterSource,
      }),
    ])

    if (statsRes.error || dailyRes.error || sourcesRes.error || leadsRes.error) {
      console.error("[admin/data] errors:", {
        stats: statsRes.error,
        daily: dailyRes.error,
        sources: sourcesRes.error,
        leads: leadsRes.error,
      })
      return NextResponse.json({ error: "Database error" }, { status: 500 })
    }

    const stats = Array.isArray(statsRes.data) ? statsRes.data[0] : statsRes.data

    return NextResponse.json({
      stats: stats || {
        total: 0,
        founders_count: 0,
        founders_remaining: 1000,
        today_count: 0,
        last_7_days_count: 0,
        medicina_count: 0,
        odontologia_count: 0,
        outro_count: 0,
      },
      daily: dailyRes.data || [],
      sources: sourcesRes.data || [],
      leads: leadsRes.data || [],
    })
  } catch (err) {
    console.error("[admin/data] error:", err)
    return NextResponse.json({ error: "Internal error" }, { status: 500 })
  }
}
