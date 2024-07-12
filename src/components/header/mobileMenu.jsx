'use client'
import React from 'react'
import Close from '@/icons/close'
import Hamburger from '@/icons/hamburger'
import Image from 'next/image';
import Link from 'next/link';
import TransitionLink from './transitionLink';
import useToggle from './useToggle';
import LogoutButton from './logOutBtn';
import DefaultAvatar from '@/icons/defaultAvatar';

const menu = [
    {
        title: 'Home',
        link: '/',
        icon: '',
    },
    {
        title: 'Users',
        link: '/users',
        icon: '',
    },
    {
        title: 'Lists',
        link: '/list',
        icon: '',
    },
    {
        title: 'Profile',
        link: '/profile-page',
        icon: '',
    },
]

export default function MobileMenu({ user_avatar, user_name, full_name, isLoggedIn }) {
    const [open, handleToggle] = useToggle(false);

    const menuWidth = open ? '85%' : '0px';
    const menuTranslateX = open ? 'translateX(0px)' : 'translateX(-50px)';
    const transition = `transform 75ms linear 0ms`;

    return (
        <>
            <div onClick={handleToggle}>
                {open ? <Close /> : <Hamburger />}
            </div>
            <div
                style={{
                    width: menuWidth,
                    transform: menuTranslateX,
                    transition: transition,
                }}
                className={`fixed top-0 left-0 right-auto bottom-0 w-10/12 h-screen bg-slate-800 py-5 px-4 z-10 transition-width transition-opacity delay-300 duration-300 sm:hidden ${open ? 'opacity-100' : 'opacity-0'}`}
            >
                {open &&
                    <SideMenu
                        userDP={user_avatar}
                        userName={user_name}
                        fullName={full_name}
                        handleToggle={handleToggle}
                        open={open}
                        isLoggedIn={isLoggedIn}
                    />
                }
            </div>
        </>
    );
}

export const SideMenu = ({ userDP, userName, fullName, open, handleToggle, isLoggedIn }) => {
    return (
        <div className='grid gap-4 h-full'>
            <div className='flex gap-2 justify-between'>
                <div className='grid gap-1 content-baseline'>
                    {userDP ? 
                        <Image
                            {...userDP}
                            className='size-10 rounded-full border border-sky-700'
                        /> : <DefaultAvatar/>
                    }
                    <h2 className='text-lg font-bold text-white'>
                        {fullName}
                    </h2>
                    <TransitionLink
                        href={`/users/${userName}`}
                        title={userName}
                        handleToggle={handleToggle}
                        open={open}
                        className='text-xs text-white/60 font-extralight italic'
                    >
                        <span>
                            @{userName.toLowerCase()}
                        </span>
                    </TransitionLink>
                </div>
                <div>
                    ICON
                </div>
            </div>
            <hr />
            <div>
                <div className='grid gap-4'>
                    {menu.map((item, i) => (
                        <div key={i} className='flex gap-2'>
                            <div>
                                {item.icon}
                            </div>
                            <TransitionLink
                                href={item.link}
                                title={item.title}
                                handleToggle={handleToggle}
                                open={open}
                                className='text-lg text-white font-medium'
                            >
                                {item.title}
                            </TransitionLink>
                        </div>
                    ))}
                </div>
            </div>
            <hr />
            <div className='flex flex-col justify-end gap-2'>
                <div>
                    {isLoggedIn ? (
                            <LogoutButton />
                        ) : 
                        (
                            <TransitionLink
                                href={'/login'}
                                title={'My account'}
                                handleToggle={handleToggle}
                                open={open}
                                className='text-lg text-white font-medium'
                            >
                                Login
                            </TransitionLink>
                        )
                    }
                </div>
                <hr />
                <div>
                    Light mode - Dark mode
                </div>
            </div>            
        </div>
    );
}