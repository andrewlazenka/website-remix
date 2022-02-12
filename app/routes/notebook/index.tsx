import React from 'react'
import { format } from 'date-fns'
import { MetaFunction, useLoaderData } from 'remix'
import { useSpring, animated } from 'react-spring'

import {
  getAllNotebookEntry,
  getPublishedNotebookEntry,
} from '~/queries/notebook'

import Badge from '~/components/Badge'
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import Layout from '~/components/Layout'
import { InternalLink } from '~/components/Links'
import Theme from '~/components/Theme'
import { getSession } from '~/session'

import type { LoaderFunction } from 'remix'
import type { NotebookEntry } from '~/types/notebook'

// https://www.conic.style/
const redBlueGradient =
  'conic-gradient(from -90deg at 25% 115%, #ff0000, #ff0066, #ff00cc, #cc00ff, #6600ff, #0000ff, #0000ff, #0000ff, #0000ff)'
const blueVioletGradient =
  'conic-gradient(from -90deg at 50% -25%, blue, blueviolet)'

type LoaderResponse = {
  notebookEntries: NotebookEntry[]
}

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request.headers.get('Cookie'))

  let notebookEntries: NotebookEntry[] = []

  if (session.get('userId')) {
    notebookEntries = (await getAllNotebookEntry()) || []
  } else {
    notebookEntries = (await getPublishedNotebookEntry()) as NotebookEntry[]
  }

  return { notebookEntries }
}

export const meta: MetaFunction = () => {
  return {
    title: `Notebook - Andrew Lazenka`,
  }
}

export default function NotebookPage() {
  const { notebookEntries } = useLoaderData<LoaderResponse>()
  const fade = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: {
      duration: 750,
    },
  })

  return (
    <Theme>
      <Header />
      <animated.div style={fade}>
        <Layout>
          <h1 className="font-bold">Notebook</h1>
          {notebookEntries.length > 0 ? (
            notebookEntries.map((entry) => (
              <InternalLink
                to={`/notebook/${entry.slug}`}
                textColour="text-gray-900 dark:text-gray-50"
                key={entry.slug}
              >
                <article className="my-4 flex items-center justify-between rounded-xl border-solid border-gray-50 p-6 transition-all duration-300 ease-in-out hover:translate-y-[-4px] hover:border-orange-500 hover:drop-shadow-xl dark:border-gray-900 dark:hover:border-orange-500">
                  <div>
                    <p className="m-0">
                      {format(new Date(entry.date_published), 'MMMM dd, yyyy')}{' '}
                      • {entry.read_time} min read
                    </p>
                    <h3 className="font-semibold">{entry.title}</h3>
                  </div>
                  <div>
                    {!entry.is_published && (
                      <Badge style={{ background: blueVioletGradient }}>
                        Draft
                      </Badge>
                    )}
                  </div>
                </article>
              </InternalLink>
            ))
          ) : (
            <h3>Notebook is empty</h3>
          )}
        </Layout>
      </animated.div>
      <Footer />
    </Theme>
  )
}
