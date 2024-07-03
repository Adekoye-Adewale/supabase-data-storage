import React from 'react'
import { supabase } from '@/components/supabase/supabaseClient';

export async function getPost(params) {
    const { user } = params;
    const { data: { session } } = await supabase.auth.getSession();
    let profile = null;

    if (session) {
        const { data: userProfile, error } = await supabase
            .from('user_profiles')
            .select('cover_img, user_avatar, phone_number, user_name')
            .eq('id', session.user.id)
            .single();

        if (error) {
            console.error('Error fetching user profile:', error);
        } else {
            profile = userProfile;
        }
    }

    return {
        props: {
            profile,
        },
    };
}

export default function UserPage({ params, userProfile}) {
    return (
        <div>
            {params.user}
        </div>
    )
}
