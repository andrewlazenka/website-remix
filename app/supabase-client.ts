import { createClient } from '@supabase/supabase-js'

export function createSupabaseClient(env: any) {
  const apiKey = env.SUPABASE_API_KEY
  const apiUrl = env.SUPABASE_API_URL

  if (!apiKey || !apiUrl) {
    throw new Error('Supabase not configured')
  }

  return createClient(apiUrl, apiKey)
}
