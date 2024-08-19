'use client';
import React from 'react';
import { UserProfile } from '@/components/dashboard';
import { useFetchUserData } from '../utils/supabase/useFetchUserData';
import Link from 'next/link';
import UserProfileForm from '@/components/form/userProfileForm';

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
            <div className="rounded-lg border border-gray-900/10 pb-12 space-y-12 bg-slate-800 max-w-4xl my-5 mx-auto px-5 py-10">
                <div>
                    <h2 className="text-3xl font-semibold leading-7 text-white">
                        Profile
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                        This information will be displayed publicly so be careful what you share.
                    </p>
                </div>
                <UserProfileForm/>
            </div>
        </main>
    );
}
