import { createClient } from "@supabase/supabase-js"

// Server-only Supabase client with service_role key.
// Bypasses RLS — never import this in client-side code.
export const supabaseAdmin = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  }
)
