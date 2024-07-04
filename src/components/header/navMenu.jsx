import React from 'react'
import Link from 'next/link'

export default function NavMenu() {
    return (
        <nav>
            <ol className='flex gap-4 items-center'>
                <Link href={'/profile-page'} title={'Profile page'} className='text-white active:text-black hover:text-sky-700 transition-all duration-300'>
                    <li>
                        Profile page
                    </li>
                </Link>
                <Link href={'/users'} title={'Users'}>
                    <li>
                        Users page
                    </li>
                </Link>
            </ol>
        </nav>
    )
}
