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
        <main>
            {data.map((user) => (
                <div key={user._id} className='divide'>
                    <UserCard 
                        img={user.user_avatar} 
                        userName={user.user_name} 
                        fullName={user.full_name} 
                        email={user.email} 
                        phoneNumber={user.phone_number}
                    />
                </div>
            ))}
        </main>
    )
}


const UserCard = ({ img, userName, fullName, email, phoneNumber}) => {
    return (
        <div>
            <Link 
                href={`/${userName}`} 
                title={userName}
                className='flex'
            >
                <Image {...img} className='w-4 h-4 rounded-full' />
                <div>
                    <div>
                        <h3>
                            {fullName}
                        </h3>
                        <span>
                            {userName}
                        </span>
                    </div>
                    <div>
                        <sapn>
                            {email}
                        </sapn>
                        <span>
                            {phoneNumber}
                        </span>
                    </div>
                </div>
            </Link>
        </div>
    )
}