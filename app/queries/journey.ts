import type { JourneyMeta } from '~/types/journey'
import { createSupabaseClient } from '~/supabase-client'

export async function getJourneyMeta({ env }: { env: any }) {
  const cols = [
    'company',
    'start_date',
    'end_date',
    'position',
    'image_url',
    'is_active',
    'is_published',
    'slug',
    'type',
  ].join(', ')

  const supabase = createSupabaseClient(env)
  const { data } = await supabase.from<JourneyMeta>('journey').select(cols)
  return data
}

export async function getJourneyBySlug(slug: string, { env }: { env: any }) {
  const cols = [
    'company',
    'start_date',
    'end_date',
    'position',
    'languages',
    'technologies',
    'content',
  ].join(', ')

  const supabase = createSupabaseClient(env)
  const { data } = await supabase
    .from<JourneyMeta>('journey')
    .select(cols)
    .match({
      slug,
      is_active: true,
    })

  if (data?.length === 0) return null

  return data[0]
}
