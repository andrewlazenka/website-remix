import React from 'react'
import { format } from 'date-fns'
import { marked } from 'marked'
import { useEditor, EditorContent } from '@tiptap/react'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Heading from '@tiptap/extension-heading'

const EditorPage = () => {
  const editor = useEditor({
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

  function saveContent() {
    if (!editor) {
      return
    }

    const md = marked.parse(editor.getText())
    console.log('🚀 ~ file: editor.tsx ~ line 24 ~ saveContent ~ md', md)
  }

  const initialDate = format(new Date(), 'yyyy-MM-dd')

  return (
    <main>
      <h1>Editor Page</h1>
      <div className="flex flex-col max-w-2xl m-auto">
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
        <section className="bg-gray-50 p-8 rounded-xl drop-shadow-lg my-4">
          <EditorContent editor={editor} />
        </section>
        <button onClick={saveContent} className="my-4">
          Save Content
        </button>
      </div>
    </main>
  )
}

export default EditorPage
