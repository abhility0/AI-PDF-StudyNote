"use client"
import React from 'react'
import { useParams } from 'next/navigation'
import WorkspaceHeader from '../_components/WorkspaceHeader';
import PdfViewer from '../_components/PdfViewer';
import {useQuery } from 'convex/react';
import { api } from '../../../convex/_generated/api';
import { useEffect } from 'react';

function Workspace() {
    const {fileId}=useParams();
    const fileInfo=useQuery(api.fileStorage.GetFileRecord,{
        fileId:fileId
    })

    useEffect (()=>{
        console.log(fileInfo)
        }, [fileInfo])
    
    return (
        <div>
            <WorkspaceHeader/>
            <div className='grid grid-cols-2 gap-5'>
                <div>
                    {/* Text Editor */}
                </div>
                <div>
                    <PdfViewer fileUrl={fileInfo?.fileUrl}/>
                </div>
            </div>
        </div>
    )
}

export default Workspace