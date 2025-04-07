import { NextResponse } from "next/server";
import { WebPDFLoader } from "@langchain/community/document_loaders/web/pdf";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

const pdfurl = 'https://impressive-ibis-928.convex.cloud/api/storage/def9941f-5845-48d1-bfec-902e9426237c'

export async function GET (req) {
    const response=await fetch(pdfurl);
    const data=await response.blob();
    const loader=new WebPDFLoader (data);
    const docs=await loader. load();

    let pdfTextContent='';
    docs.forEach(doc=>{
    pdfTextContent=pdfTextContent+doc.pageContent;
    })

    const splitter = new RecursiveCharacterTextSplitter({
        chunkSize: 100, 
        chunkOverlap: 20,
        });
        const output = await splitter.createDocuments([pdfTextContent]);

        let splitterList=[];
        output.forEach(doc=>{
            splitterList.push(doc.pageContent);
        })

    return NextResponse.json({result:splitterList})

}