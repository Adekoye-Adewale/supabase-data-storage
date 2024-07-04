'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import { UserProfile } from '@/components/dashboard';
import { useUserProfile } from '../hooks/useUserProfile';

// const useUserProfile = dynamic(() => import('../hooks/useUserProfile'), {
//     ssr: false,
// });

export default function ProfilePage() {

    const { userProfile, loading } = useUserProfile();
    
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
            {userProfile ? (
                <UserProfile profile={userProfile} />
            ) : (
                <span className='m-auto text-3xl text-center font-bold'>
                    User needs to sign in
                </span>
            )}
        </main>
    );
}
