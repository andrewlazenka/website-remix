import React from 'react'
import { format } from 'date-fns'
import { json, Link, MetaFunction, useLoaderData } from 'remix'

import { getAllNotebookEntry } from '~/queries/notebook'
import { getLinks } from '~/queries/links'
import { formatLinks } from '~/util/links'

import Header from '~/components/Header'
import Footer from '~/components/Footer'
import Layout from '~/components/Layout'
import { InternalLink } from '~/components/Links'
import Theme from '~/components/Theme'

import type { LoaderFunction } from 'remix'
import type { NotebookEntry } from '~/types/notebook'

type LoaderResponse = {
  notebookEntries: NotebookEntry[]
}

export const loader: LoaderFunction = async () => {
  const links = (await getLinks()) || []
  const notebookEntries = await getAllNotebookEntry()

  return {
    notebookEntries,
    ...formatLinks(links),
  }
}

export const meta: MetaFunction = () => {
  return {
    title: `Notebook - Andrew Lazenka`,
  }
}

export default function NotebookPage() {
  const { notebookEntries } = useLoaderData<LoaderResponse>()

  return (
    <Theme>
      <Header />
      <Layout>
        <h1>Notebook</h1>
        {notebookEntries.length > 0 ? notebookEntries.map(entry => (
          <InternalLink to={`/notebook/${entry.slug}`}>
            <article className="py-6">
              <h3>{entry.title}</h3>
              <h4>{format(new Date(entry.created_at), 'MMMM dd, yyyy')}</h4>
            </article>
          </InternalLink>
        )) : (
          <h3>Notebook is empty</h3>
        )}
      </Layout>
      <Footer />
    </Theme>
  )
}
