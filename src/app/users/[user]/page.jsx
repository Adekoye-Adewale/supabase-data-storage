import React from 'react';
import { createClientAll } from '@/app/utils/supabase/server';
import { UserProfile } from '@/components/dashboard';
import Link from 'next/link';
import { supabase } from '@/app/utils/supabase';

export default async function Pages({ params }) {
    const { user } = params; 
    const { data, error } = await createClientAll();

    if (error) {
        return (
            <div className='grid place-content-center gap-2 text-center'>
                <p>Error loading user data.</p>
                <p>
                    {error}
                </p>
                <Link href={`/users`}>
                    Go to Users Page
                </Link>
            </div>
        );
    }

    const fetchUser = data.find(
        (info) => info.user_name.toLowerCase() === user.toLowerCase()
    );

    const { data: postData, error: postError } = await supabase
        .from('Test Table')
        .select('*')
        .eq('user_id', fetchUser.id);
    
    if (postError) {
        return (
            <div className='grid place-content-center gap-2 text-center'>
                <p>Error loading user posts.</p>
                <p>
                    {error}
                </p>
                <Link href={`/users`}>
                    Go to Users Page
                </Link>
            </div>
        );
    }

    if (!fetchUser) {
        return (
            <div className='p-2 grid place-content-center gap-2 text-center'>
                <div className='my-8'>
                    <p 
                        className='text-xl'
                    >
                        User {user} do not exist.
                    </p>                    
                </div>
                <Link 
                    href={`/users`} 
                    className='text-base font-semibold text-sky-950 bg-slate-500 py-3 px-7 rounded-md hover:bg-slate-300 transition-all duration-300'
                >
                    Go to Users Page
                </Link>
            </div>
        );
    }

    const postCount = postData.length;
    const noPost = postData.length === 0;

    return (
        <div>
            <UserProfile 
                profile={fetchUser}
            />
            <div className='py-10 px-5'>
                <div className='p-2 grid place-content-center gap-2 text-center my-8 text-lg font-semibold'>
                    {postCount === 1 ? '1 post' : postCount > 1 ? `${postCount} posts` : ''} 
                </div>
                {noPost ? (
                    <div className='p-2 grid place-content-center gap-2 text-center'>
                        <div className='my-8'>
                            <p className='text-xl'>
                                User has no post yet
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className='grid gap-5'>
                        {postData.map( ( post, i ) => (
                            <div key={i} className='grid gap-2 text-left p-5 border rounded-2xl'>
                                <p>
                                    post user name: {post.name}
                                </p>
                                <p>
                                    post user email: {post.email}
                                </p>
                                <p>
                                    post user phone number: {post.phoneNumber}
                                </p>
                                <p>
                                    post user message: {post.message}
                                </p>
                                <p>
                                    post date: {post.created_at}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>            
        </div>
    )
}
