import React from 'react'
import { format } from 'date-fns'
import { json, MetaFunction, useLoaderData } from 'remix'

import { getNotebookEntryBySlug } from '~/queries/notebook'

import Badge from '~/components/Badge'
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import Layout from '~/components/Layout'
import Theme from '~/components/Theme'

import type { LoaderFunction } from 'remix'
import type { NotebookEntry } from '~/types/notebook'

type LoaderResponse = {
  notebookEntry: NotebookEntry
}

const blueVioletGradient =
  'conic-gradient(from -90deg at 50% -25%, blue, blueviolet)'

export const loader: LoaderFunction = async ({ params }) => {
  if (!params.slug) {
    return json('Notebook entry not found', { status: 404 })
  }

  const notebookEntry = await getNotebookEntryBySlug(params.slug)

  if (!notebookEntry) {
    throw new Response('Notebook entry not found', { status: 404 })
  }

  return { notebookEntry }
}

export const meta: MetaFunction = ({ data }: { data: LoaderResponse }) => {
  if (!data?.notebookEntry) {
    return {
      title: 'Page Not Found - Andrew Lazena',
    }
  }

  const { title } = data.notebookEntry
  return {
    title: `${title} - Andrew Lazenka`,
  }
}

function NotebookEntry() {
  const { notebookEntry } = useLoaderData<LoaderResponse>()

  const { content, created_at, tags, title } = notebookEntry

  const createdAtDate = format(new Date(created_at), 'MMMM dd, yyyy')

  return (
    <Theme>
      <Header />
      <Layout>
        <h4 className="py-4 font-medium">Published {createdAtDate}</h4>
        <h1>{title}</h1>
        {tags && (
          <div className="flex flex-wrap">
            {tags.map((t) => (
              <Badge
                key={t}
                style={{
                  background: blueVioletGradient,
                }}
              >
                {t}
              </Badge>
            ))}
          </div>
        )}
        <article
          className="prose lg:prose-xl dark:prose-invert pt-6"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </Layout>
      <Footer />
    </Theme>
  )
}

export default NotebookEntry
