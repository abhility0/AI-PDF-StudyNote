import React from 'react';
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import EditorExtension from './EditorExtension'

function TextEditor() {
    const editor = useEditor({
        extensions: [StarterKit, 
            Placeholder.configure({
                placeholder: 'Start Taking your notes here...'
            })
            ],
        content: 'Sample Text',
        editorProps: {
            attributes:{
            class: 'focus: outline-none h-screen p-5'
        }
    }
    })
    return (
    <div>
        <EditorExtension editor={editor} />
        <div>
        <EditorContent editor={editor} />
        </div>
    </div>
    )
}

export default TextEditor
