import React from 'react';
import { supabase } from '@/app/utils/supabase';
import ProfilePageHeader from '@/components/dashboard/header';
import { UserProfile } from '@/components/dashboard';


export default async function UserPage({ params }) {
    const { user } = params; 
    let userProfile = null;
    let error = null;

    try {
        const { data: userProfileData, error: profileError } = await supabase
        .from('user_profiles')
        .select('cover_img, user_avatar, email, full_name, phone_number, user_name')
        .eq('user_name', user)
        .single();

        if (profileError) {
        throw new Error(`Profile fetch error: ${profileError.message}`);
        } else {
        userProfile = userProfileData;
        }
    } catch (err) {
        error = err;
    }

    if (error) {
        return <div>Error fetching user data: {error.message}</div>;
    }

    if (!userProfile) {
        return <div>No user profile found.</div>;
    }

    return (
        <>
            <UserProfile       
                profile={userProfile}
            />
        </>
    );
}