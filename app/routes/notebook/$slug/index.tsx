import React from 'react'
import { format } from 'date-fns'
import { json, MetaFunction, useLoaderData } from 'remix'

import { getNotebookEntryBySlug } from '~/queries/notebook'
import { getLinks } from '~/queries/links'
import { formatLinks } from '~/util/links'

import Header from '~/components/Header'
import Footer from '~/components/Footer'
import Layout from '~/components/Layout'
import Theme from '~/components/Theme'

import type { LoaderFunction } from 'remix'
import type { NotebookEntry } from '~/types/notebook'

type LoaderResponse = {
  notebookEntry: NotebookEntry
}

export const loader: LoaderFunction = async ({ params }) => {
  if (!params.slug) {
    return json('Notebook entry not found', { status: 404 })
  }

  const links = (await getLinks()) || []
  const notebookEntry = await getNotebookEntryBySlug(params.slug)

  if (!notebookEntry) {
    return json('Notebook entry not found', { status: 404 })
  }

  return {
    notebookEntry,
    ...formatLinks(links),
  }
}

export const meta: MetaFunction = ({ data }: { data: LoaderResponse }) => {
  const { title } = data.notebookEntry
  return {
    title: `${title} - Andrew Lazenka`,
  }
}

function NotebookEntry() {
  const { notebookEntry } = useLoaderData<LoaderResponse>()
  const { title, content, created_at } = notebookEntry

  const createdAtDate = format(new Date(created_at), 'MMMM dd, yyyy')

  return (
    <Theme>
      <Header />
      <Layout>
        <h1>{title}</h1>
        <h4 className="font-medium">{createdAtDate}</h4>
        <div
          className="prose lg:prose-xl"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </Layout>
      <Footer />
    </Theme>
  )
}

export default NotebookEntry
