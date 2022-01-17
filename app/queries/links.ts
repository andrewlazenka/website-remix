import supabase from '~/supabase-client'
import type { Link } from '~/types/links'

export async function getLinks() {
  const cols = [
    'content',
    'url',
    'type',
    'order',
  ].join(", ")

  const { data } = await supabase.from<Link>("links").select(cols)
  return data
}
