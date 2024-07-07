'use client'
import React, { useEffect, useState } from 'react'
import Close from '@/icons/close'
import Hamburger from '@/icons/hamburger'
import Image from 'next/image';
import Link from 'next/link';

const menu = [
    {
        title: `Home`,
        link: `/`,
        icon: ``,
    },
    {
        title: `User`,
        link: `/user`,
        icon: ``,
    },
    {
        title: `Lists`,
        link: `/list`,
        icon: ``,
    },
    {
        title: `Profile`,
        link: `/profile-page`,
        icon: ``,
    },
]

export default function MobileMenu() {

    const [ open, setOpen ] = useState(false);

    const menuWidth = open ? '85%' : '0px';
    const menuTranslateX = open ? 'translateX(0px)' : 'translateX(-50px)';
    const transition = `transform 75ms linear 0ms`;

    const handleToggle = () => {
        setTimeout(() => {
            setOpen(!open);
        }, 100);
    };

    return (
        <>
            <div onClick={handleToggle}>
                {open ? <Close /> : <Hamburger />}
            </div>
            <div 
                style={
                    { 
                        width: menuWidth, 
                        transform: menuTranslateX, 
                        transition: transition, 
                    }
                } 
                className={`fixed top-0 left-0 right-auto bottom-0 w-10/12 h-screen bg-slate-800 py-5 px-4 z-10 transition-width delay-300 duration-300 sm:hidden ${open ? 'opacity-100' : 'opacity-0' }`}
            >
                {open && <SideMenu />}
            </div>
        </>
    )
}

export const SideMenu = ({userDP, userName, fullName, style}) => {
    return (
        <div style={style}>
            <div>
                <div className='grid gap-2'>
                    <Image 
                        {...userDP} 
                        className='size-10 rounded-full border border-sky-700'
                    />
                    <h2 className='text-lg font-bold text-white'>
                        {fullName}
                    </h2>
                    <Link 
                        href={`user/${userName}`} 
                        title={userName}
                        className='text-xs text-white/60 font-extralight'
                    >
                        <span>
                            {userName}
                        </span>
                    </Link>
                </div>
                <div>
                    ICON
                </div>
            </div>
            <hr />
            <div>
                <div className='grid gap-4'>
                    {menu.map(( item, i ) => (
                        <div key={i} className='flex gap-2'>
                            <div>
                                {item.icon}
                            </div>
                            <Link 
                                href={item.link} 
                                title={item.title}
                                className='text-lg text-white font-medium'
                            >
                                {item.title}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <hr/>
            <div>
                Light mode - Dark mode
            </div>
        </div>
    )
}