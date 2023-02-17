export type Journey = {
  company: string
  start_date: string
  end_date: string
  position: string
  image_url: string
  languages: string[]
  technologies: string[]
  is_active: boolean
  is_published: boolean
  content: string
  slug: string
  type: string
}

export type JourneyMeta = Omit<Journey, 'content'>
