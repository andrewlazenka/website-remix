import type { JourneyMeta } from '~/types/journey'
import supabase from './client'

export async function getJourneyMeta() {
  const cols = [
    'company',
    'start_date',
    'end_date',
    'position',
    'image_url',
    'languages',
    'technologies',
    'is_active'
  ].join(", ")

  const { data } = await supabase.from<JourneyMeta>("journey").select(cols)
  return data
}
