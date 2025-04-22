import { Bold, Italic, Sparkles } from 'lucide-react' 
import React from 'react'
import { useParams } from 'next/navigation'
import { useAction } from 'convex/react'; 
import { api } from '../../../convex/_generated/api'; // Adjust path if needed


function EditorExtension ({editor}) {

    const {fileId}=useParams();
    const SearchAI=useAction(api.myAction.search)
    const onAiClick=async()=>{
        const selectedText=editor.state.doc.textBetween(
            editor.state.selection.from,
            editor.state.selection.to,
            ' '
        );
        console.log("selectedText", selectedText)

        const result=await SearchAI({
            query: selectedText,
            fileId: fileId
            
    })

    const UnformattedAns=JSON.parse(result);
    let AllUnformattedAns='';
    UnformattedAns&&UnformattedAns.forEach(item=>{
        AllUnformattedAns=AllUnformattedAns+item.pageContent
    }) ;


    const PROMPT="For question :"+selectedText+" and with the given content as answer"+
    " please give appropriate answer in HTML format. The answer content is: "+AllUnformattedAns
}
    
    return editor&&(
        <div className='p-5'>
            <div className="control-group"> 
            <div className="button-group flex gap-3">
            <button
                onClick={()=>editor.chain().focus().toggleBold().run()}
                className={editor.isActive('bold') ? 'text-blue-500' : ''} >
            <Bold/>
            </button>
            <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={editor.isActive('italic') ? 'text-blue-500' : ''}
          >
            <Italic/>
          </button>
          <button
            onClick={() => onAiClick() }
            className={''}
          >
            <Sparkles/>
          </button>
            </div>
            </div>
        </div>
    )
}

export default EditorExtension