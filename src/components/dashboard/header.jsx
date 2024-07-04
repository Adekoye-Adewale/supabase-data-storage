import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ProfilePageHeader({ cover_img, user_avatar, full_name, user_name, description, email, role_id }) {
    return (
        <div>
            <CoverImage img={cover_img}/>
            <ProfileInfo
                profileImage={user_avatar}
                fullName={full_name}
                userName={user_name}
                description={description}
                userMail={email}
                role={role_id}
            />
        </div>
    )
}

const CoverImage = ({ img }) => {
    return (
        <div className='overflow-hidden h-48'>
            <Image 
                {...img}
                className='h-52 w-full object-cover object-50% 60%'
            />
        </div>
    )
}

const ProfileInfo = ({ profileImage, fullName, userName, description, userMail, role }) => {
    
    return (
        <div className='bg-gray-800'>
            <div className="flex gap-4 justify-between items-center p-4">
                <Image 
                    {...profileImage}
                    className='w-32 h-32 rounded-full border-4 border-slate-100 shadow-2xl -mt-14'
                />
                <Link href={'/profile-page'} title='Edit profile'>
                    <button className='flex gap-2 items-center py-2 px-8 bg-transparent text-white border-2 border-zinc-200/65 rounded-md hover:text-slate-400 hover:bg-black hover:border-black transition-all duration-300'>
                        <svg xmlns="https://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}>
                                <path d="M19.09 14.441v4.44a2.37 2.37 0 0 1-2.369 2.369H5.12a2.37 2.37 0 0 1-2.369-2.383V7.279a2.356 2.356 0 0 1 2.37-2.37H9.56"></path>
                                <path d="M6.835 15.803v-2.165c.002-.357.144-.7.395-.953l9.532-9.532a1.362 1.362 0 0 1 1.934 0l2.151 2.151a1.36 1.36 0 0 1 0 1.934l-9.532 9.532a1.361 1.361 0 0 1-.953.395H8.197a1.362 1.362 0 0 1-1.362-1.362M19.09 8.995l-4.085-4.086"></path>
                            </g>
                        </svg>
                        Edit profile
                    </button>
                </Link>
            </div>
            <div className='grid gap-2 p-4'>
                <h2 className='font-bold text-4xl text-white'>
                    {fullName}
                </h2>
                <h3 className='text-sm font-light text-slate-100/65'>
                    @{userName}
                </h3>
                <p className='text-base text-white font-normal'>
                    {description ? description : '' }
                </p>
                <Link href={`mailto:${userMail}`}>
                    {userMail}
                </Link>
            </div>
            <div className='my-4 p-4'>
                {role === 1 ? <span>Admin</span> : <span>User</span>}
            </div>
        </div>
    )
}