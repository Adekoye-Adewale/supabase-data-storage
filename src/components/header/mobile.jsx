'use client'
import React from 'react';
import MobileMenu from './mobileMenu';
import { useFetchUserData } from '@/app/utils/supabase/useFetchUserData';

export default function Mobile() {
    
    const { data, loading } = useFetchUserData();

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <MobileMenu {...data} />
        </div>
    );
}
