import type { Link } from '~/types/links'

export function formatLinks(links: Link[]) {
  const socialLinks: { [key: string]: string } = {}
  links
    .filter((l) => l.type === 'social')
    .forEach((l) => {
      socialLinks[l.content.toLowerCase()] = l.url
    })
  const customLinks = links.filter((l) => l.type === 'custom')

  return { customLinks, socialLinks }
}
