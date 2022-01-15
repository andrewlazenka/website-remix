import supabase from './client'
import { kebabCase } from 'lodash'
import type { NotebookEntry } from '~/types/notebook'

const table = 'notebook'

export async function createNotebookEntry({ date_published, title, content }: Pick<NotebookEntry, 'title' | 'content' | 'date_published'>) {
  const { data } = await supabase.from<NotebookEntry>(table).insert({
    title,
    slug: kebabCase(title.toLowerCase()),
    content,
    date_published
  })
  return data
}

export async function getNotebookEntryById(id: number) {
  const { data } = await supabase.from<NotebookEntry>(table).select().eq('id', id).eq('is_published', true)

  if (data) return data[0]

  return
}

export async function getNotebookEntryBySlug(slug: string) {
  const { data } = await supabase.from<NotebookEntry>(table).select().eq('slug', slug).eq('is_published', true)

  if (data) return data[0]

  return
}

export async function getAllNotebookEntry() {
  const cols = [
    'id',
    'title',
    'slug',
    'created_at'
  ].join(',')
  const { data } = await supabase.from<NotebookEntry>(table).select(cols).eq('is_published', true).order('created_at', { ascending: false })
  return data
}
