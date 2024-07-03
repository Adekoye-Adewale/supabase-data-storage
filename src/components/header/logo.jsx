import Image from 'next/image'
import React from 'react'

export default function SiteLogo() {
    return (
        <div>
            <Image 
                src={'/images/akanda_dev.png'} 
                alt={'logo'} 
                width={300} 
                height={300}
                className='w-24 h-24'
            />
        </div>
    )
}
