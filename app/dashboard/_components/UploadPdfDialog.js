"use client"
import { Input } from "../../../@/components/ui/input"
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger, DialogFooter, DialogClose
  } from "../../../@/components/ui/dialog"
import { Button } from "../../../@/components/ui/button";
import { useMutation } from 'convex/react'
import { api } from '../../../convex/_generated/api' 
import { Loader2Icon } from 'lucide-react'
import { v4 as uuidv4 } from 'uuid'
import { useUser } from '@clerk/nextjs';


  

function UploadPdfDialog({children}) {
    const generateUploadUrl=useMutation(api.fileStorage.generateUploadUrl)
    const addFileEntry=useMutation(api.fileStorage.addFileEntrytoDb)
    const getFileUrl=useMutation(api.fileStorage.getFileUrl)
    const {user}=useUser();
    const [file,setFile]=useState();
    const [loading, setLoading]=useState(false)
    const[fileName, setFileName]=useState()

    const OnFileSelect=(event)=>{
        setFile(event.target.files[0]);
    }

    const OnUpload=async()=>{
        setLoading(true);
        const posturl = await generateUploadUrl();

        const result = await fetch(posturl, {
            method: "POST",
            headers: { "Content-Type": file?.type },
            body: file,
        });
            const { storageId } = await result.json();
            console.log ('StorageId', storageId);
            const fileId= uuidv4();
            const fileUrl=await getFileUrl({storageId:storageId})
            const resp=await addFileEntry({
                fileId:fileId,
                storageId:storageId,
                fileName: fileName??'Untitled',
                fileUrl: fileUrl,
                createdBy: user.primaryEmailAddress.emailAddress
                })
                console.log(resp)
            setLoading (false);
    }    
    
    return (
        <Dialog>
        <DialogTrigger asChild>
            {children}
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Upload PDF File</DialogTitle>
            <DialogDescription asChild>
            <div className=''>
                <h2>Select a file to Upload</h2>
                <div className='flex mt-2 gap-2 p-3 rounded-md border'>
                    <Input type='file' accept='application/pdf'
                    onChange={(event)=>OnFileSelect (event)}/>            
                </div>
                <div className='mt-2'>
                    <label>File Name *</label>
                    <Input placeholder='File Name' onChange={(e)=>setFileName(e.target.value)}/>
                </div>
            </div>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm: justify-start">
            <DialogClose asChild>
                <Button type="button" variant="secondary"> Close </Button>
            </DialogClose>
            <Button onClick={OnUpload}>
                {loading?
                    <Loader2Icon className='animate-spin'/>: 'Upload'
                }
             </Button> 
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
    )
}
export default UploadPdfDialog