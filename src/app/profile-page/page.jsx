'use client';
import React from 'react';
import { UserProfile } from '@/components/dashboard';
import { useFetchUserData } from '../utils/supabase/useFetchUserData';
import Link from 'next/link';
import PhotoIcon from '@/icons/photoIcon';

export default function ProfilePage() {

    const { user, loading, isLoggedIn } = useFetchUserData();

    if (loading) {
        return (
            <div>
                <span className='m-auto text-3xl text-center font-bold'>
                    Profile Data is loading
                </span>
            </div>
        );
    }

    return (
        <main>
            {isLoggedIn ? (
                <UserProfile profile={user} />
            ) : (
                <div className='p-2 w-full min-h-[500px] grid place-content-center gap-2 text-center'>
                    <span className='m-auto text-3xl text-center font-bold'>
                        User needs to sign in
                    </span>
                    <div className='my-8'>
                        <Link 
                            href={'/login'} 
                            className='text-base font-semibold text-sky-950 bg-slate-500 py-3 px-7 rounded-md hover:bg-slate-300 transition-all duration-300'
                        >
                            Login now
                        </Link>
                    </div>
                </div>
                
            )}
            <div className="rounded-lg border border-gray-900/10 pb-12 space-y-12 bg-slate-800 max-w-4xl my-5 mx-auto px-5 py-10">
                <div>
                    <h2 className="text-3xl font-semibold leading-7 text-white">
                        Profile
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                        This information will be displayed publicly so be careful what you share.
                    </p>
                </div>
                <form action="">
                    <span>
                        <label 
                            htmlFor="name" 
                            className="block text-sm font-medium leading-6 text-white"
                        >
                            Your Name
                        </label>
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Full Name" 
                            className="block flex-1 rounded-lg border-solid border border-sky-200 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" />
                    </span>

                    <span>
                        <label 
                            htmlFor="userName" 
                            className="block text-sm font-medium leading-6 text-white"
                        >
                            User Name
                        </label>
                        <input 
                            type="text" 
                            name="userName" 
                            placeholder="User Name" 
                            className="block flex-1 rounded-lg border-solid border border-sky-200 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" 
                        />
                    </span>

                    <span>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">Email</label>
                        <input type="email" name="email" placeholder="sample@email.com" className="block flex-1 rounded-lg border-solid border border-sky-200 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" />
                    </span>

                    <span>
                        <label htmlFor="phoneNumber" className="block text-sm font-medium leading-6 text-white">Phone Number</label>
                        <input type="tel" name="phoneNumber" id="phoneNumber" className="block flex-1 rounded-lg border-solid border border-sky-200 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" />
                    </span>

                    <span>
                        <label htmlFor="userAvartar" className="block text-sm font-medium leading-6 text-white">User Avartar</label>
                        <input type="url" name="userAvartar" id="userAvartar" className="block flex-1 rounded-lg border-solid border border-sky-200 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" />
                    </span>

                    <div className="col-span-full">
                        <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-white">
                            Cover photo
                        </label>
                        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-sky-200/60 bg-gray-800/50 px-6 py-10">
                            <div className="text-center">
                                <PhotoIcon />
                                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                    <label
                                        htmlFor="file-upload"
                                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                    >
                                        <span>Upload a file</span>
                                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                    </label>
                                    <p className="pl-1">or drag and drop</p>
                                </div>
                                <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-full">
                        <label htmlFor="about" className="block text-sm font-medium leading-6 text-white">
                            About
                        </label>
                        <div className="mt-2">
                            <textarea
                                id="about"
                                name="about"
                                rows={3}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                defaultValue={''}
                            />
                        </div>
                        <p className="mt-3 text-sm leading-6 text-gray-600">
                            Write a few sentences about yourself.
                        </p>
                    </div>

                </form>
            </div>
        </main>
    );
}
