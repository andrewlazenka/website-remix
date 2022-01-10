import type { JourneyMeta } from '~/types/journey'
import supabase from './client'

export async function getJourneyMeta() {
  const cols = [
    'company',
    'start_date',
    'end_date',
    'position',
    'languages',
    'technologies',
    'is_active'
  ].join(', ')

  const { data } = await supabase.from<JourneyMeta>('journey').select(cols)
  return data
}

export async function getJourneyBySlug(slug: string) {
  const cols = [
    'company',
    'start_date',
    'end_date',
    'position',
    'languages',
    'technologies',
    'content'
  ].join(', ')

  const { data } = await supabase.from<JourneyMeta>('journey').select(cols).eq('slug', slug)
  if (data) return data[0]
}
