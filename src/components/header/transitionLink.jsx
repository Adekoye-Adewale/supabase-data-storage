'use client'
import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function TransitionLink({ children, href, handleToggle, open, ...props }) {
    const router = useRouter();

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const handleTransition = async (e) => {
        e.preventDefault();
        const body = document.querySelector('body');
        if (open) {
            handleToggle();
            console.log("running");
        }
        body.classList.add('page-transition');
        await sleep(500);
        router.push(href);
        await sleep(500);
        body.classList.remove('page-transition');
    };

    return (
        <Link 
            onClick={handleTransition}
            href={href}
            {...props}
        >
            {children}
        </Link>
    )
}
