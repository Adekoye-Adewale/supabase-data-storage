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
                Profile Data is loading
            </div>
        );
    }

    return (
        <main>
            {userProfile ? (
                <UserProfile profile={userProfile} />
            ) : (
                <span>
                    User needs to sign in
                </span>
            )}
        </main>
    );
}
