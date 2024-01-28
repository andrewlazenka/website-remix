import { createSupabaseClient } from '~/supabase-client'

import type { NotebookEntry } from '~/types/notebook'

const table = 'notebook'
const stripHtml = /<[^>]*>?/gm
const stripNewline = '\\n'

export async function getNotebookEntryById(id: number, { env }: { env: any }) {
  const supabase = createSupabaseClient(env)
  const { data } = await supabase
    .from<NotebookEntry>(table)
    .select()
    .eq('id', id)
    .eq('is_published', true)

  if (data) return data[0]

  return
}

export async function getNotebookEntryBySlug(
  slug: string,
  { env }: { env: any }
) {
  const supabase = createSupabaseClient(env)
  const { data } = await supabase
    .from<NotebookEntry>(table)
    .select()
    .match({ slug, is_published: true })

  if (data?.length === 0) {
    return
  }

  const entry = data?.[0] as NotebookEntry

  entry.word_count = entry.content
    .replace(stripHtml, '')
    .replace(stripNewline, ' ')
    .split(' ').length
  entry.read_time = Math.ceil(entry.word_count / 200)

  return entry
}

export async function getAllNotebookEntry({ env }: { env: any }) {
  const cols = [
    'id',
    'title',
    'slug',
    'content',
    'date_published',
    'word_count',
    'read_time_minutes',
    'is_published',
  ].join(',')

  const supabase = createSupabaseClient(env)
  const { data } = await supabase
    .from<NotebookEntry>(table)
    .select(cols)
    .order('date_published', { ascending: false })

  return data?.map(({ content, ...d }) => {
    const word_count = content
      .replace(stripHtml, '')
      .replace(stripNewline, ' ')
      .split(' ').length
    return {
      ...d,
      word_count,
      read_time: Math.ceil(word_count / 200),
    }
  })
}

export async function getPublishedNotebookEntry({ env }: { env: any }) {
  const cols = [
    'id',
    'title',
    'slug',
    'content',
    'date_published',
    'word_count',
    'read_time_minutes',
    'is_published',
  ].join(',')

  const supabase = createSupabaseClient(env)
  const { data } = await supabase
    .from<NotebookEntry>(table)
    .select(cols)
    .eq('is_published', true)
    .order('date_published', { ascending: false })

  return data?.map(({ content, ...d }) => {
    const word_count = content
      .replace(stripHtml, '')
      .replace(stripNewline, ' ')
      .split(' ').length
    return {
      ...d,
      word_count,
      read_time: Math.ceil(word_count / 200),
    }
  })
}
