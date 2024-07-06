import React from 'react';
import { createClientAll } from '@/app/utils/supabase/server';
import { UserProfile } from '@/components/dashboard';
import Link from 'next/link';

export default async function Pages({ params }) {
    const { user } = params; 
    const { data, error } = await createClientAll();

    if (error) {
        return (
            <div>
                <p>Error loading user data.</p>
                <p>
                    {error}
                </p>
                <Link href={`/users`}>
                    <a>Go to Users Page</a>
                </Link>
            </div>
        );
    }

    const fetchUser = data.find(
        (info) => info.user_name.toLowerCase() === user.toLowerCase()
    );

    if (!fetchUser) {
        return (
            <div>
                <p>User do not exist.</p>
                <Link href={`/users`}>
                    <a>Go to Users Page</a>
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
