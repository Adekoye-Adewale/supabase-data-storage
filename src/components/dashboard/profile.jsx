import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function UserProfile({ profile }) {
    return (
        <div>
            <ProfileHeader
                coverImg={profile.cover_img}
                dpImg={profile.user_avatar}
                phoneNumber={profile.phone_number}
                userName={profile.user_name}
            />
        </div>
    );
}

const ProfileHeader = ({ coverImg, dpImg, phoneNumber, userName }) => {
    return (
        <div
            className='relative'
        >
            <div
                className='overflow-hidden max-h-80'
            >
                <Image {...coverImg} className='w-full h-80 object-cover object-[50% 60%]'/>                
            </div>
            <div className='flex bg-white overflow-visible p-4 justify-between items-center'>
                <div 
                    className='flex gap-4 items-center'
                >
                    <Image 
                        {...dpImg} 
                        className='w-40 h-40 rounded-full border-solid border-4 -mt-20 border-white shadow-lg'
                    />
                    <h2 className='text-black text-3xl font-semibold'>
                        {userName}
                    </h2>
                </div>
                <div className='flex gap-4 text-black'>
                    <Link href={`tel:${phoneNumber}`} title={`Call ${userName}`}>
                        <button className='flex gap-2 items-center py-2 px-8 border-2 border-slate-700/50 border-solid rounded-md transition-all duration-300 hover:bg-sky-700 hover:text-white hover:border-sky-700'>
                            <svg xmlns="https://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512">
                                <path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="30" d="M451 374c-15.88-16-54.34-39.35-73-48.76c-24.3-12.24-26.3-13.24-45.4.95c-12.74 9.47-21.21 17.93-36.12 14.75s-47.31-21.11-75.68-49.39s-47.34-61.62-50.53-76.48s5.41-23.23 14.79-36c13.22-18 12.22-21 .92-45.3c-8.81-18.9-32.84-57-48.9-72.8C119.9 44 119.9 47 108.83 51.6A160 160 0 0 0 83 65.37C67 76 58.12 84.83 51.91 98.1s-9 44.38 23.07 102.64s54.57 88.05 101.14 134.49S258.5 406.64 310.85 436c64.76 36.27 89.6 29.2 102.91 23s22.18-15 32.83-31a159 159 0 0 0 13.8-25.8C465 391.17 468 391.17 451 374Z" />
                            </svg>
                            Call
                        </button>
                    </Link>
                    <button className='flex gap-2 items-center py-2 px-8 border-2 border-slate-700/50 border-solid rounded-md transition-all duration-300 hover:bg-sky-700 hover:text-white hover:border-sky-700'>
                        <svg xmlns="https://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}>
                                <path d="M19.09 14.441v4.44a2.37 2.37 0 0 1-2.369 2.369H5.12a2.37 2.37 0 0 1-2.369-2.383V7.279a2.356 2.356 0 0 1 2.37-2.37H9.56"></path>
                                <path d="M6.835 15.803v-2.165c.002-.357.144-.7.395-.953l9.532-9.532a1.362 1.362 0 0 1 1.934 0l2.151 2.151a1.36 1.36 0 0 1 0 1.934l-9.532 9.532a1.361 1.361 0 0 1-.953.395H8.197a1.362 1.362 0 0 1-1.362-1.362M19.09 8.995l-4.085-4.086"></path>
                            </g>
                        </svg>
                        Edit
                    </button>
                </div>
            </div>
        </div>
    )
}
