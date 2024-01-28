import React from 'react'
import type { ActionFunction, LoaderFunction } from '@remix-run/cloudflare'
import { redirect } from '@remix-run/cloudflare'
import { Form, useLoaderData } from '@remix-run/react'
import { format, parseISO } from 'date-fns'
import { useEditor, EditorContent } from '@tiptap/react'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Heading from '@tiptap/extension-heading'

import { getSession } from '~/session'
import { getNotebookEntryBySlug, updateNotebookEntry } from '~/queries/notebook'

import type { NotebookEntry } from '~/types/notebook'

type LoaderResponse = {
  notebookEntry: NotebookEntry
}

export const loader: LoaderFunction = async ({ request, params }) => {
  const session = await getSession(request.headers.get('Cookie'))

  if (!session.get('userId')) {
    return redirect('/admin/sign-in')
  }

  if (!params.slug) {
    throw new Response('Notebook entry not found', { status: 404 })
  }

  const notebookEntry = await getNotebookEntryBySlug(params.slug)

  if (!notebookEntry) {
    throw new Response('Notebook entry not found', { status: 404 })
  }

  return { notebookEntry }
}

export const action: ActionFunction = async ({ request }) => {
  const remixSession = await getSession(request.headers.get('Cookie'))
  const formData = await request.formData()
  const id = Number(formData.get('id'))
  const title = String(formData.get('title'))
  const date_published = parseISO(
    `${String(formData.get('date_published'))}T04:00:00.000Z`
  )
  const content = String(formData.get('content'))

  const result = await updateNotebookEntry(
    {
      id,
      title,
      date_published,
      content,
    },
    {
      auth: remixSession.get('refresh_token'),
    }
  )

  if (result.status !== 200) {
    throw new Response(result.statusText, { status: result.status })
  }

  return redirect(`/notebook/${result.data?.[0]?.slug}`)
}

const NotebookEdit = () => {
  const { notebookEntry } = useLoaderData<LoaderResponse>()
  const { content, date_published, id, title } = notebookEntry

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
      <div className="m-auto flex max-w-2xl flex-col">
        <Form method="post">
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
            name="date_published"
            className="my-4"
            defaultValue={initialDate}
          />
          <section className="my-4 rounded-xl bg-white p-8 drop-shadow-lg">
            <EditorContent editor={editor} />
          </section>
          <input type="hidden" name="content" value={editor?.getHTML()} />
          <input type="hidden" name="id" value={id} />
          <button className="my-4">Save Content</button>
        </Form>
      </div>
    </main>
  )
}

export default NotebookEdit
