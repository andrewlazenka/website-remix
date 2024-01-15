import { routes } from '@remix-run/dev/server-build'
import { createSitemapGenerator } from 'remix-sitemap'

import { type LoaderFunction } from '@remix-run/node'

export const { experimental_sitemap, robots } = createSitemapGenerator({
  siteUrl: 'https://andrewlazenka.com',
  // configure other things here
})

export const loader: LoaderFunction = async ({ request }) => {
  // remove admin routes from sitemap
  Object.keys(routes).forEach((r) => {
    if (r.includes('admin')) {
      delete routes[r]
    }
  })

  return await experimental_sitemap(request, routes)
}
