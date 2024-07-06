import React from 'react'
import { createClientAll } from '../utils/supabase/server'
import Image from 'next/image';
import Link from 'next/link';

export default async function UsersPage() {

    const { data, error } = await createClientAll();

    if (error){
        return (
            <div>
                No user found {error}
            </div>
        )
    }

    return (
        <main className='p-4'>
            <div className=''>
                {data.map((user) => (
                    <div key={user.id} className='my-4'>
                        <UserCard 
                            img={user.user_avatar} 
                            userName={user.user_name} 
                            fullName={user.full_name} 
                            email={user.email} 
                            phoneNumber={user.phone_number}
                        />
                    </div>
                ))}
            </div>
        </main>
    )
}


const UserCard = ({ img, userName, fullName, email, phoneNumber}) => {
    return (
        <div>
            <Link 
                href={`/${userName}`} 
                title={userName}
                className='flex gap-2 rounded-md shadow-md w-full max-w-[400px] p-5 bg-gray-800 hover:bg-sky-700 transition-all duration-300'
            >
                <Image {...img} className='size-12 border rounded-full' />
                <div>
                    <div className='flex gap-2 items-baseline'>
                        <h3 className='text-xl'>
                            {fullName}
                        </h3>
                        <span className='text-[8px] italic'>
                            @{userName}
                        </span>
                    </div>
                    <div className='flex gap-2'>
                        <sapn className='text-xs'>
                            {email}
                        </sapn>
                        <span className='text-xs'>
                            {phoneNumber}
                        </span>
                    </div>
                </div>
            </Link>
        </div>
    )
}