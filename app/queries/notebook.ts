import supabase from './client'
import { kebabCase } from 'lodash'
import type { NotebookEntry } from '~/types/notebook'

const table = 'notebook'

export async function createNotebookEntry({ created_at, title, content }: Pick<NotebookEntry, 'title' | 'content' | 'created_at'>) {
  const { data } = await supabase.from<NotebookEntry>(table).insert({
    title,
    slug: kebabCase(title.toLowerCase()),
    content,
    created_at,
    updated_at: new Date()
  })
  return data
}

export async function getNotebookEntryById(id: number) {
  const { data } = await supabase.from<NotebookEntry>(table).select().eq('id', id)

  if (data) return data[0]

  return
}

export async function getNotebookEntryBySlug(slug: string) {
  const { data } = await supabase.from<NotebookEntry>(table).select().eq('slug', slug)

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
  const { data } = await supabase.from<NotebookEntry>(table).select(cols).order('created_at', { ascending: false })
  return data
}
