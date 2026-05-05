import { createClient, SupabaseClient } from "@supabase/supabase-js"

// Server-only Supabase client with service_role key.
// Bypasses RLS — never import this in client-side code.
// Lazy: only instantiate when actually used so the module can be
// imported (e.g. during build) without env vars present.
let cached: SupabaseClient | null = null

export function getSupabaseAdmin(): SupabaseClient {
  if (cached) return cached
  const url = process.env.SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !key) {
    throw new Error("SUPABASE_URL ou SUPABASE_SERVICE_ROLE_KEY não configuradas")
  }
  cached = createClient(url, key, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  })
  return cached
}

// Backwards-compat proxy: existing code that imports `supabaseAdmin`
// continues to work; the client is built on first property access.
export const supabaseAdmin = new Proxy({} as SupabaseClient, {
  get(_target, prop) {
    const client = getSupabaseAdmin() as unknown as Record<string | symbol, unknown>
    const value = client[prop]
    if (typeof value === "function") {
      return value.bind(client)
    }
    return value
  },
})
