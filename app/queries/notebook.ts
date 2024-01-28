import kebabCase from 'lodash.kebabcase'
import supabase from '~/supabase-client'

import type { NotebookEntry } from '~/types/notebook'

const table = 'notebook'
const stripHtml = /<[^>]*>?/gm
const stripNewline = '\\n'

export async function createNotebookEntry(
  {
    date_published,
    title,
    content,
    is_published = false,
    word_count,
    read_time_minutes,
  }: Pick<
    NotebookEntry,
    | 'title'
    | 'content'
    | 'date_published'
    | 'is_published'
    | 'word_count'
    | 'read_time_minutes'
  >,
  { auth }: { auth: string }
) {
  await supabase.auth.setSession(auth)
  return supabase.from<NotebookEntry>(table).insert({
    title,
    slug: kebabCase(title.toLowerCase()),
    content,
    date_published,
    is_published,
    word_count,
    read_time_minutes,
  })
}

export async function updateNotebookEntry(
  {
    id,
    title,
    content,
    date_published,
  }: Pick<NotebookEntry, 'id' | 'title' | 'content' | 'date_published'>,
  { auth }: { auth: string }
) {
  await supabase.auth.setSession(auth)
  return supabase
    .from<NotebookEntry>(table)
    .update({
      title,
      slug: kebabCase(title.toLowerCase()),
      content,
      date_published,
      updated_at: new Date(),
    })
    .eq('id', id)
}

export async function getNotebookEntryById(id: number) {
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
  isAuthenticated: boolean = false
) {
  const match: { slug: string; is_published?: boolean } = { slug }

  if (!isAuthenticated) {
    match.is_published = true
  }

  const { data } = await supabase
    .from<NotebookEntry>(table)
    .select()
    .match(match)

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

export async function getAllNotebookEntry() {
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

export async function getPublishedNotebookEntry() {
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
