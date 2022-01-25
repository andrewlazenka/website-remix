import supabase from '~/supabase-client'

export async function signIn(email: string, password: string) {
  return supabase.auth.signIn({ email, password })
}

export async function resetPassword(token: string, password: string) {
  return supabase.auth.api.updateUser(token, { password })
}
