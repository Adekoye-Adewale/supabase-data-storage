import React from 'react';
import { supabase } from '../supabase/supabaseClient';
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
            router.push('/login');
        }
    };

    return (
        <button 
            onClick={handleLogout} 
            className="flex gap-2 items-center text-white bg-red-600 border-solid border-2 border-red-600 px-4 py-2 rounded-md hover:text-red-600 hover:bg-white hover:border-red-600 transition-all duration-300"
        >
            Logout
            <svg xmlns="https://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12h-9.5m7.5 3l3-3l-3-3m-5-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-1" />
            </svg>
        </button>
    );
};

export default LogoutButton;
