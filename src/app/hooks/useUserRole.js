"use client"
import { useEffect, useState } from 'react';
import { supabase } from '../api/supabaseClient';

const useUserRole = (userId) => {
    const [role, setRole] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserRole = async () => {
        const { data, error } = await supabase
            .from('user_profiles')
            .select('roles(name)')
            .eq('id', userId)
            .single();

        if (error) {
            console.error('Error fetching user role:', error);
        } else {
            setRole(data?.roles?.name || null);
        }
        setLoading(false);
        };

        if (userId) {
        fetchUserRole();
        }
    }, [userId]);

    return { role, loading };
};

export default useUserRole;
