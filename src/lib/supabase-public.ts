import { createClient, SupabaseClient } from "@supabase/supabase-js"

// Public Supabase client using anon/publishable key.
// Lazy: only instantiate when actually used so the module can be
// imported (e.g. during build) without env vars present.
let cached: SupabaseClient | null = null

export function getSupabasePublic(): SupabaseClient {
  if (cached) return cached
  const url = process.env.SUPABASE_URL
  const key = process.env.SUPABASE_ANON_KEY
  if (!url || !key) {
    throw new Error("SUPABASE_URL ou SUPABASE_ANON_KEY não configuradas")
  }
  cached = createClient(url, key, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  })
  return cached
}
