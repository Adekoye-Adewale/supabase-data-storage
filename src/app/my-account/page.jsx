import React from 'react'
import { createClientSession } from '../utils/supabase/server'
import ProfilePageHeader from '@/components/dashboard/header'

export default async function myAccountPage() {

    const { data, error } = await createClientSession()

    if (error) {
        return <div>Something went wrong while fetching user data: {error.message}</div>;
    }

    return (
        <main className='p-4'>
            <ProfilePageHeader 
                {...data}
            />
        </main>
    )
}
