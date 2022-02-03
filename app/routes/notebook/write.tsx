import React from 'react'
import { ActionFunction, Form, LoaderFunction, redirect } from 'remix'
import { format, parseISO } from 'date-fns'
import { useEditor, EditorContent } from '@tiptap/react'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Heading from '@tiptap/extension-heading'

import { getSession } from '~/session'
import { createNotebookEntry } from '~/queries/notebook'

const stripHtml = /<[^>]*>?/gm
const stripNewline = "\\n"

export const action: ActionFunction = async ({ request }) => {
  const remixSession = await getSession(request.headers.get('Cookie'))
  const formData = await request.formData()
  const title = String(formData.get('title'))
  const date_published = parseISO(`${String(formData.get('date_published'))}T04:00:00.000Z`)
  const content = String(formData.get('content'))

  const word_count = content.replace(stripHtml, '').replace(stripNewline, " ").split(" ").length
  const read_time_minutes = Math.ceil(word_count / 200)

  const result = await createNotebookEntry({
    title,
    date_published,
    content,
    word_count,
    read_time_minutes,
    is_published: false,
  },
  {
    auth: remixSession.get('refresh_token')
  })

  if (result.status !== 201) {
    throw new Response(result.statusText, { status: result.status })
  }

  return redirect(`/notebook/${result.data?.[0]?.slug}`)
}

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request.headers.get('Cookie'))

  if (!session.get('userId')) {
    return redirect('/sign-in')
  }

  return null
}

const NotebookWrite = () => {
  const editor = useEditor({
    content: `Your content goes here ✍🏻`,
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
        <Form method="post">
          <input
            type="text"
            name="title"
            placeholder="Title"
            required
            className="my-4"
          />
          <input
            type="date"
            name="date_published"
            className="my-4"
            defaultValue={initialDate}
          />
          <section className="my-4 rounded-xl bg-gray-50 p-8 drop-shadow-lg">
            <EditorContent editor={editor} />
          </section>
          <input type="hidden" name="content" value={editor?.getHTML()} />
          <div className="flex w-full justify-around">
            <button className="my-4" type="submit">Publish</button>
          </div>
        </Form>
      </div>
    </main>
  )
}

export default NotebookWrite
