import React from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { getSession } from '~/session'
import type { LoaderFunction } from 'remix'

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(
    request.headers.get("Cookie")
  );

  if (!session.get('userId')) {
    throw new Response('Unauthorized to view this page', { status: 401 })
  }

  return null
}

const EditorPage = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    content: '<p>Hello World!</p>',
    editorProps: {
      attributes: {
        class: "prose lg:prose-xl"
      }
    }
  })

  function saveContent() {
    if (!editor) {
      return
    }

    console.log(editor.getHTML())
  }

  return (
    <main>
      <h1>Editor Page</h1>
      <EditorContent editor={editor} />
      <button onClick={saveContent}>Save Content</button>
    </main>
  )
}

export default EditorPage
