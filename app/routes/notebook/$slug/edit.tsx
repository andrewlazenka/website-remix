import React from 'react'
import { LoaderFunction, useLoaderData } from 'remix'
import { format } from 'date-fns'
import { useEditor, EditorContent } from '@tiptap/react'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Heading from '@tiptap/extension-heading'

import { getSession } from '~/session'
import { getLinks } from '~/queries/links'
import { getNotebookEntryBySlug } from '~/queries/notebook'
import { formatLinks } from '~/util/links'

import type { NotebookEntry } from '~/types/notebook'

type LoaderResponse = {
  notebookEntry: NotebookEntry
}

export const loader: LoaderFunction = async ({ request, params }) => {
  const session = await getSession(
    request.headers.get("Cookie")
  );

  if (!session.get('userId')) {
    throw new Response('Unauthorized to view this page', { status: 401 })
  }

  if (!params.slug) {
    throw new Response('Notebook entry not found', { status: 404 })
  }

  const links = (await getLinks()) || []
  const notebookEntry = await getNotebookEntryBySlug(params.slug)

  if (!notebookEntry) {
    throw new Response('Notebook entry not found', { status: 404 })
  }

  return {
    notebookEntry,
    ...formatLinks(links),
  }
}

const NotebookEdit = () => {
  const { notebookEntry } = useLoaderData<LoaderResponse>()
  const { date_published, content, title } = notebookEntry

  const editor = useEditor({
    content,
    extensions: [
      Document,
      Paragraph,
      Text,
      Heading.configure({
        levels: [1, 2, 3, 4, 5, 6],
      }),
    ],
    editorProps: {
      attributes: {
        class: 'prose lg:prose-xl',
      },
    },
  })

  const initialDate = format(new Date(date_published), 'yyyy-MM-dd')

  return (
    <main>
      <h1 className="text-center">Editor Page</h1>
      <div className="flex flex-col max-w-2xl m-auto">
        <input
          type="text"
          name="title"
          placeholder="Title"
          required
          className="my-4"
          defaultValue={title}
        />
        <input
          type="date"
          name="created_at"
          className="my-4"
          defaultValue={initialDate}
        />
        <section className="bg-gray-50 p-8 rounded-xl drop-shadow-lg my-4">
          <EditorContent editor={editor} />
        </section>
        <button className="my-4">
          Save Content
        </button>
      </div>
    </main>
  )
}

export default NotebookEdit
