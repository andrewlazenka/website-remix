import React from 'react'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
  isRouteErrorResponse,
} from '@remix-run/react'
import type { LinksFunction, LoaderFunction } from '@remix-run/cloudflare'

import { getLinks } from '~/queries/links'
import { formatLinks } from '~/util/links'

import '~/styles/hamburger-menu.css'
import '~/styles/global.css'
import '~/tailwind.css'

export let links: LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
    crossOrigin: 'anonymous',
  },
]

export const loader: LoaderFunction = async () => {
  const links = await getLinks()

  return {
    ...formatLinks(links || []),
  }
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                window.__onThemeChange = function() {};

                function setAppTheme(newTheme) {
                  window.__theme = newTheme;
                  preferredTheme = newTheme;
                  document.documentElement.className = newTheme
                  window.__onThemeChange(newTheme);
                }

                var preferredTheme;

                try {
                  preferredTheme = localStorage.getItem('theme');
                } catch (err) { }

                window.__setPreferredTheme = function(newTheme) {
                  setAppTheme(newTheme);
                  try {
                    localStorage.setItem('theme', newTheme);
                  } catch (err) {}
                }

                var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
                darkQuery.addListener(function(e) {
                  window.__setPreferredTheme(e.matches ? 'dark' : 'light')
                });

                setAppTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
              })();
            `,
          }}
        />
      </head>
      <body className="cpt-latte dark:ctp-mocha bg-pattern-triangles bg-cover transition-colors duration-300 ease-in-out selection:bg-ctp-sapphire">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

export function ErrorBoundary() {
  const error = useRouteError()

  if (isRouteErrorResponse(error)) {
    let message
    switch (error.status) {
      case 401:
        message = (
          <p>
            Oops! Looks like you tried to visit a page that you do not have
            access to.
          </p>
        )
        break
      case 404:
        message = (
          <p>Oops! Looks like you tried to visit a page that does not exist.</p>
        )
        break

      default:
        throw new Error(error.data || error.statusText)
    }

    return (
      <div>
        <h1>
          {error.status}: {error.statusText}
        </h1>
        {message}
      </div>
    )
  }

  return (
    <div>
      <div>
        <h1>There was an error</h1>
        <p>{error.message}</p>
        <hr />
        <p>
          Hey, developer, you should replace this with what you want your users
          to see.
        </p>
      </div>
    </div>
  )
}
