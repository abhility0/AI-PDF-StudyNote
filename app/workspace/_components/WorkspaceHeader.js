import { UserButton } from '@clerk/nextjs'
import React from 'react'
import Image from 'next/image'

function WorkspaceHeader() {
    return (
        <div className='p-4 flex justify-between'>
            <Image src={'../logo.svg'} alt='logo' width={70} height={50}/>
            <UserButton/>
        </div>
    )
}

export default WorkspaceHeader