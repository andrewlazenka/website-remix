import { createSupabaseClient } from '~/supabase-client'
import type { Link } from '~/types/links'

export async function getLinks({ env }: { env: any }) {
  const cols = ['content', 'url', 'type', 'order'].join(', ')

  const supabase = createSupabaseClient(env)
  const { data } = await supabase.from<Link>('links').select(cols)
  return data
}
