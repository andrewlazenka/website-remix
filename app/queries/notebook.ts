import { kebabCase } from 'lodash'
import supabase from '~/supabase-client'

import type { NotebookEntry } from '~/types/notebook'

const table = 'notebook'

export async function createNotebookEntry({
  date_published,
  title,
  content,
}: Pick<NotebookEntry, 'title' | 'content' | 'date_published'>) {
  const { data } = await supabase.from<NotebookEntry>(table).insert({
    title,
    slug: kebabCase(title.toLowerCase()),
    content,
    date_published,
  })
  return data
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

export async function getNotebookEntryBySlug(slug: string) {
  const { data } = await supabase
    .from<NotebookEntry>(table)
    .select()
    .eq('slug', slug)
    .eq('is_published', true)

  if (data) return data[0]

  return
}

export async function getAllNotebookEntry() {
  const cols = ['id', 'title', 'slug', 'content', 'date_published'].join(',')
  const { data } = await supabase
    .from<NotebookEntry>(table)
    .select(cols)
    .eq('is_published', true)
    .order('date_published', { ascending: false })

  return data?.map(({ content, ...d }) => {
    const word_count = content.replace(/<[^>]*>?/gm, '').replace("\\n", " ").split(" ").length
    return {
      ...d,
      word_count,
      read_time: Math.ceil(word_count / 200)
    }
  })
}
