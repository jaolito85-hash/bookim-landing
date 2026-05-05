import { createClient } from "@supabase/supabase-js"

// Public Supabase client using anon/publishable key.
// Subject to RLS policies — used for the waitlist where we expose
// INSERT to anon role and protect via server-side validation.
export const supabasePublic = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  }
)
