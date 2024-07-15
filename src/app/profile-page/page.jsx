'use client';
import React from 'react';
import { UserProfile } from '@/components/dashboard';
import { useFetchUserData } from '../utils/supabase/useFetchUserData';
import Link from 'next/link';

export default function ProfilePage() {

    const { user, loading, isLoggedIn } = useFetchUserData();

    if (loading) {
        return (
            <div>
                <span className='m-auto text-3xl text-center font-bold'>
                    Profile Data is loading
                </span>
            </div>
        );
    }

    return (
        <main>
            {isLoggedIn ? (
                <UserProfile profile={user} />
            ) : (
                <div className='p-2 w-full min-h-[500px] grid place-content-center gap-2 text-center'>
                    <span className='m-auto text-3xl text-center font-bold'>
                        User needs to sign in
                    </span>
                    <div className='my-8'>
                        <Link 
                            href={'/login'} 
                            className='text-base font-semibold text-sky-950 bg-slate-500 py-3 px-7 rounded-md hover:bg-slate-300 transition-all duration-300'
                        >
                            Login now
                        </Link>
                    </div>
                </div>
                
            )}
        </main>
    );
}
