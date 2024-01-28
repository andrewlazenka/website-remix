// import { routes } from '@remix-run/dev/server-build'
import { createSitemapGenerator } from 'remix-sitemap'

import { type LoaderFunction } from '@remix-run/cloudflare'

export const { experimental_sitemap, robots } = createSitemapGenerator({
  siteUrl: 'https://andrewlazenka.com',
  // configure other things here
})

export const loader: LoaderFunction = async ({ request }) => {
  // NOTE: importing routes from package causes build error with new vite support
  const routes = []

  // remove admin routes from sitemap
  Object.keys(routes).forEach((r) => {
    if (r.includes('admin')) {
      delete routes[r]
    }
  })

  return await experimental_sitemap(request, routes)
}
