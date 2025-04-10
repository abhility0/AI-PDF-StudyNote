import { Bold } from 'lucide-react' 
import React from 'react'

function EditorExtension ({editor}) {
    return (
        <div className='p-5'>
            <div className="control-group"> 
            <div className="button-group">
            <button
                onClick={()=>editor.chain().focus().toggleBold().run()}
                className={editor.isActive('bold') ? 'text-blue' : ''} >
            <Bold/>
            </button>
            </div>
            </div>
        </div>
    )
}

export default EditorExtension