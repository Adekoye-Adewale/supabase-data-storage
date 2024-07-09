import React from 'react';
import { createClientAll } from '@/app/utils/supabase/server';
import { UserProfile } from '@/components/dashboard';
import Link from 'next/link';

export default async function Pages({ params }) {
    const { user } = params; 
    const { data, error } = await createClientAll();

    if (error) {
        return (
            <div className='grid place-content-center gap-2 text-center'>
                <p>Error loading user data.</p>
                <p>
                    {error}
                </p>
                <Link href={`/users`}>
                    Go to Users Page
                </Link>
            </div>
        );
    }

    const fetchUser = data.find(
        (info) => info.user_name.toLowerCase() === user.toLowerCase()
    );

    if (!fetchUser) {
        return (
            <div className='p-2 grid place-content-center gap-2 text-center'>
                <div className='my-8'>
                    <p 
                        className='text-xl'
                    >
                        User '{user}' do not exist.
                    </p>                    
                </div>
                <Link 
                    href={`/users`} 
                    className='text-base font-semibold text-sky-950 bg-slate-500 py-3 px-7 rounded-md hover:bg-slate-300 transition-all duration-300'
                >
                    Go to Users Page
                </Link>
            </div>
        );
    }

    return (
        <div>
            <UserProfile 
                profile={fetchUser}
            />
        </div>
    )
}
