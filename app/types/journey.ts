export type Journey = {
  company: string
  start_date: string
  end_date: string
  position: string
  image_url: string
  languages: string[]
  technologies: string[]
  is_active: boolean
  content: string
  slug: string
}
export type JourneyMeta = Omit<Journey, 'content'>
