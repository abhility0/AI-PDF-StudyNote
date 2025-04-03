import { Layout } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Shield } from 'lucide-react'
import { Button } from "../../../components/ui/button"; // Adjust based on file structure
import { Progress } from "../../../components/ui/progress"

function SideBar() {
    return(
        <div className='shadow-md h-screen p-5'>
            <Image src={'/logo.svg'} alt='logo' width={75} height={75} />

            <div className='mt-10'>
                <Button className="w-full">+ Upload PDF</Button>
                <div className='flex gap-2 items-center p-3 mt-5 hover: bg-slate-100 rounded-lg cursor-pointer'>
                    <Layout/>
                    <h2>Workspace</h2>
                </div>
                <div className='flex gap-2 items-center p-3 mt-1 hover: bg-slate-100 rounded-lg cursor-pointer'>
                    <Shield/>
                    <h2>Upgrade</h2>
                </div>
            </div>
            <div>
                <Progress value={33}/>
            </div>
        </div>
    )
}
export default SideBar 