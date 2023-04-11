import React from 'react'
import { format } from 'date-fns'
import { type LoaderFunction, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import {
  getAllNotebookEntry,
  getPublishedNotebookEntry,
} from '~/queries/notebook'

import Badge from '~/components/Badge'
import EmojiWiggle from '~/components/EmojiWiggle'
import Header from '~/components/Header'
import HeroBanner from '~/components/HeroBanner'
import Footer from '~/components/Footer'
import Layout from '~/components/Layout'
import { InternalLink } from '~/components/Links'
import Theme from '~/components/Theme'
import { getSession } from '~/session'

import type { NotebookEntry } from '~/types/notebook'

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

  return (
    <Theme>
      <Header />
      <HeroBanner>
        <h1 className="py-8 text-center font-bold">
          <EmojiWiggle>📝</EmojiWiggle> Notebook
        </h1>
        <h3 className="text-center font-normal">
          Here's where my thoughts go! Software, crypto, productivity, and more.
        </h3>
      </HeroBanner>
      <Layout>
        {notebookEntries.length > 0 ? (
          notebookEntries.map((entry) => (
            <InternalLink
              to={`/notebook/${entry.slug}`}
              textColour="text-gray-900 dark:text-gray-50"
              key={entry.slug}
            >
              <article className="my-4 flex items-center justify-between rounded-xl border-2 border-solid border-gray-100 p-6 transition-all duration-300 ease-in-out hover:translate-y-[-4px] hover:border-orange-500 hover:drop-shadow-xl dark:border-gray-900 dark:hover:border-orange-500">
                <div>
                  <p className="m-0">
                    {format(new Date(entry.date_published), 'MMMM dd, yyyy')} •{' '}
                    {entry.read_time} min read
                  </p>
                  <h3 className="font-semibold">{entry.title}</h3>
                </div>
                <div>{!entry.is_published && <Badge>Draft</Badge>}</div>
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
