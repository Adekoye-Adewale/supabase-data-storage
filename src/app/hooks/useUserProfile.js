'use client'
import { useState, useEffect } from 'react';
import { UserAvatar as UserDP } from '@/app/utils/supabase/fetchUser';

export const useUserProfile = () => {
    const [userProfile, setUserProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const profile = await UserDP();
            setUserProfile(profile);
            setLoading(false);
        };
        
        fetchData();
    }, []);

    return { userProfile, loading };
};