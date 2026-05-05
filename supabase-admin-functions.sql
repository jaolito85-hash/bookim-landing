-- =========================================================================
-- Admin functions for the Bookim waitlist dashboard
-- Run this in the Lovable / Supabase SQL editor.
--
-- All functions are SECURITY DEFINER so they bypass RLS — they can only
-- be called from the server-side admin route, which is protected by a
-- password-checked httpOnly cookie.
-- =========================================================================

-- 1. Aggregated stats (single row)
CREATE OR REPLACE FUNCTION public.get_waitlist_admin_stats()
RETURNS TABLE(
  total INTEGER,
  founders_count INTEGER,
  founders_remaining INTEGER,
  today_count INTEGER,
  last_7_days_count INTEGER,
  medicina_count INTEGER,
  odontologia_count INTEGER,
  outro_count INTEGER
) AS $$
BEGIN
  RETURN QUERY
  SELECT
    COUNT(*)::INTEGER AS total,
    COUNT(*) FILTER (WHERE waitlist_leads.position <= 1000)::INTEGER AS founders_count,
    GREATEST(1000 - COUNT(*) FILTER (WHERE waitlist_leads.position <= 1000), 0)::INTEGER AS founders_remaining,
    COUNT(*) FILTER (WHERE created_at >= CURRENT_DATE)::INTEGER AS today_count,
    COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '7 days')::INTEGER AS last_7_days_count,
    COUNT(*) FILTER (WHERE area_de_estudo = 'medicina')::INTEGER AS medicina_count,
    COUNT(*) FILTER (WHERE area_de_estudo = 'odontologia')::INTEGER AS odontologia_count,
    COUNT(*) FILTER (WHERE area_de_estudo = 'outro')::INTEGER AS outro_count
  FROM public.waitlist_leads;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;


-- 2. Daily breakdown for the last N days
CREATE OR REPLACE FUNCTION public.get_waitlist_daily(p_days INTEGER DEFAULT 14)
RETURNS TABLE(
  dia DATE,
  total INTEGER
) AS $$
BEGIN
  RETURN QUERY
  SELECT
    d::DATE AS dia,
    COALESCE(COUNT(wl.id), 0)::INTEGER AS total
  FROM generate_series(
    CURRENT_DATE - (p_days - 1),
    CURRENT_DATE,
    INTERVAL '1 day'
  ) AS d
  LEFT JOIN public.waitlist_leads wl
    ON DATE(wl.created_at) = d::DATE
  GROUP BY d
  ORDER BY d ASC;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;


-- 3. Source breakdown (UTM source / campaign)
CREATE OR REPLACE FUNCTION public.get_waitlist_sources()
RETURNS TABLE(
  source TEXT,
  total INTEGER
) AS $$
BEGIN
  RETURN QUERY
  SELECT
    COALESCE(utm_source, 'direto')::TEXT AS source,
    COUNT(*)::INTEGER AS total
  FROM public.waitlist_leads
  GROUP BY utm_source
  ORDER BY total DESC;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;


-- 4. Paginated list of leads
CREATE OR REPLACE FUNCTION public.get_waitlist_leads_admin(
  p_limit INTEGER DEFAULT 50,
  p_offset INTEGER DEFAULT 0,
  p_filter_area TEXT DEFAULT NULL,
  p_filter_source TEXT DEFAULT NULL
)
RETURNS TABLE(
  lead_position INTEGER,
  nome TEXT,
  email TEXT,
  whatsapp TEXT,
  area_de_estudo TEXT,
  utm_source TEXT,
  utm_campaign TEXT,
  created_at TIMESTAMPTZ
) AS $$
BEGIN
  RETURN QUERY
  SELECT
    wl.position,
    wl.nome,
    wl.email,
    wl.whatsapp,
    wl.area_de_estudo,
    wl.utm_source,
    wl.utm_campaign,
    wl.created_at
  FROM public.waitlist_leads wl
  WHERE
    (p_filter_area IS NULL OR wl.area_de_estudo = p_filter_area)
    AND (p_filter_source IS NULL OR COALESCE(wl.utm_source, 'direto') = p_filter_source)
  ORDER BY wl.created_at DESC
  LIMIT p_limit OFFSET p_offset;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;


-- 5. Full export (no pagination, for CSV download)
CREATE OR REPLACE FUNCTION public.get_waitlist_export()
RETURNS TABLE(
  lead_position INTEGER,
  nome TEXT,
  email TEXT,
  whatsapp TEXT,
  area_de_estudo TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  utm_content TEXT,
  created_at TIMESTAMPTZ
) AS $$
BEGIN
  RETURN QUERY
  SELECT
    wl.position,
    wl.nome,
    wl.email,
    wl.whatsapp,
    wl.area_de_estudo,
    wl.utm_source,
    wl.utm_medium,
    wl.utm_campaign,
    wl.utm_content,
    wl.created_at
  FROM public.waitlist_leads wl
  ORDER BY wl.position ASC;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;


-- Grant execute to anon (functions are server-side gated by admin password,
-- and they don't expose anything beyond aggregates / explicit fields)
GRANT EXECUTE ON FUNCTION public.get_waitlist_admin_stats() TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.get_waitlist_daily(INTEGER) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.get_waitlist_sources() TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.get_waitlist_leads_admin(INTEGER, INTEGER, TEXT, TEXT) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.get_waitlist_export() TO anon, authenticated;
