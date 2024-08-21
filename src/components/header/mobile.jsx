'use client'
import React from 'react';
import MobileMenu from './mobileMenu';
import { useFetchUserData } from '@/app/utils/supabase/useFetchUserData';
import Hamburger from '@/icons/hamburger';

export default function Mobile() {
    const { data, loading, isLoggedIn } = useFetchUserData();

    if (loading) {
        return <Hamburger/>
    }

    console.log('mobileMenu===',data)

    return (
        <div>
            <MobileMenu {...data} isLoggedIn={isLoggedIn} />
        </div>
    );
}
