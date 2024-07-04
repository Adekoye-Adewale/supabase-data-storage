import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function SiteLogo() {
    return (
        <Link href={'/'}>
            <Image 
                src={'/images/logo.png'} 
                alt={'logo'} 
                width={300} 
                height={300}
                className='w-20 h-20'
            />
        </Link>
    )
}
