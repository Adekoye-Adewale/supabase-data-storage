import React from 'react'
import { createClientSession } from '../utils/supabase/server'
import ProfilePageHeader from '@/components/dashboard/header'
import Link from 'next/link'

export default async function myAccountPage() {

    const { data, error } = await createClientSession()

    if (error) {
        return (
            <div className='grid place-content-center gap-4 p-8 m-auto w-full min-h-screen'>
                <span className='text-3xl text-center font-bold'>
                    Something went wrong while fetching user data: {error.message}
                </span>
                <div className='mx-auto my-4'>
                    <Link href={'/login'} className='m-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-sm'>
                        Login
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <main>
            <ProfilePageHeader 
                {...data}
            />
        </main>
    )
}
