'use client'
import React from 'react';
import { supabase } from '@/app/utils/supabase';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const LogoutButton = () => {
    const router = useRouter();

    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            toast.error('Error logging out. Please try again.');
            console.error('Logout error:', error);
        } else {
            toast.success('Logged out successfully.');
            // router.push('/login');
            location.reload();
        }
    };

    return (
        <button 
            onClick={handleLogout} 
            className="danger-btn"
        >
            Logout
            <svg xmlns="https://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12h-9.5m7.5 3l3-3l-3-3m-5-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-1" />
            </svg>
        </button>
    );
};

export default LogoutButton;
