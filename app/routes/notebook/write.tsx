import React from 'react'
import type { LoaderFunction } from 'remix'
import { format } from 'date-fns'
import { useEditor, EditorContent } from '@tiptap/react'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Heading from '@tiptap/extension-heading'

import { getSession } from '~/session'

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request.headers.get('Cookie'))

  if (!session.get('userId')) {
    throw new Response('Unauthorized to view this page', { status: 401 })
  }

  return null
}

const NotebookWrite = () => {
  const editor = useEditor({
    content: `Notebook content goes here ✍🏻`,
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

  const initialDate = format(new Date(), 'yyyy-MM-dd')

  return (
    <main>
      <h1 className="text-center">New Notebook Entry</h1>
      <div className="m-auto flex max-w-2xl flex-col">
        <input
          type="text"
          name="title"
          placeholder="Title"
          required
          className="my-4"
        />
        <input
          type="date"
          name="created_at"
          className="my-4"
          defaultValue={initialDate}
        />
        <section className="my-4 rounded-xl bg-gray-50 p-8 drop-shadow-lg">
          <EditorContent editor={editor} />
        </section>
        <div className="flex w-full justify-around">
          <button className="my-4">Toggle Preview</button>
          <button className="my-4">Save Draft</button>
          <button className="my-4">Publish</button>
        </div>
      </div>
    </main>
  )
}

export default NotebookWrite
