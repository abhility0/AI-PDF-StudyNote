import Image from 'next/image'
import React from 'react'

function SideBar() {
    return(
        <div className='shadow-sm h-screen'>
            <Image src={'/logo.svg'} alt='logo' width={75} height={75} />
        </div>
    )
}
export default SideBar