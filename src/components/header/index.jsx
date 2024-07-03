'use client'
import React, { useEffect, useState } from 'react'
import { supabase } from '../supabase/supabaseClient';
import SiteLogo from './logo'
import Link from 'next/link'
import LogoutButton from './logOutBtn';
import { UserAvatar } from '../dashboard';

export default function SiteHeader() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const { data: { session } } = await supabase.auth.getSession();
                if (session) {
                    const { data: userProfile } = await supabase
                        .from('user_profiles')
                        .select('user_name')
                        .eq('id', session.user.id)
                        .single();

                    if (userProfile) {
                        setUser({ ...session.user, user_name: userProfile.user_name });
                    }
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    return (
        <header>
            <div 
                className="flex justify-between items-center p-4 bg-gray-800 text-white"
            >
                <SiteLogo />
                <nav>
                    {loading ? (
                        <span>Loading...</span>
                    ) : user ? (
                        <div className="flex items-center space-x-4">
                            <span>Welcome, {user.user_name}</span>
                            <UserAvatar/>
                            <LogoutButton />
                        </div>
                    ) : (
                        <Link href={'/login'} className="text-white">
                            Login
                        </Link>
                    )}
                </nav>
            </div>
        </header>
    );
}