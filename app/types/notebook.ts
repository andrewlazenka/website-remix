export type NotebookEntry = {
  id: number
  title: string
  slug: string
  content: string
  date_published: Date
  is_published: boolean
  tags: string[] | null
  word_count: number
  read_time: number
  read_time_minutes: number
  created_at: Date
  updated_at: Date
}
