import React from 'react'
import { createClientSession } from '../utils/supabase/server'
import ProfilePageHeader from '@/components/dashboard/header'
import Link from 'next/link'

export default async function myAccountPage() {

    const { data, error } = await createClientSession()

    if (error) {
        return (
            <div>
                <span className='m-auto text-3xl text-center font-bold'>
                    Something went wrong while fetching user data: {error.message}
                </span>
                <div>
                    <Link href={'/login'} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-sm'>
                        Login
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <main className='p-4'>
            <ProfilePageHeader 
                {...data}
            />
        </main>
    )
}
