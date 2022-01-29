import React from 'react'
import { format } from 'date-fns'
import { MetaFunction, useLoaderData } from 'remix'

import { getAllNotebookEntry } from '~/queries/notebook'

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
  const notebookEntries = await getAllNotebookEntry()

  return { notebookEntries }
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
        {notebookEntries.length > 0 ? (
          notebookEntries.map((entry) => (
            <InternalLink to={`/notebook/${entry.slug}`} textColour="text-gray-900 dark:text-gray-50" key={entry.slug} >
              <article className="p-6 my-4 border-solid border-gray-50 dark:border-gray-900 hover:border-orange-500 dark:hover:border-orange-500 rounded-xl transition-all duration-300 ease-in-out hover:translate-y-[-4px] hover:drop-shadow-xl">
                <p className="m-0">{format(new Date(entry.date_published), 'MM/dd/yyyy')} - {entry.read_time} min read</p>
                <h3>{entry.title}</h3>
              </article>
            </InternalLink>
          ))
        ) : (
          <h3>Notebook is empty</h3>
        )}
      </Layout>
      <Footer />
    </Theme>
  )
}
