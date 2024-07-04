import { createClientSession } from '@/app/utils/supabase/server';
import { UserAvatar } from '../dashboard';
import LogoutButton from './logOutBtn';
import Link from 'next/link';

export default async function NavMessage() {

    const { data, error } = await createClientSession()

    if (error) {
        return (
            <Link 
                href={'/login'} 
                title='My account'
                className="text-white"
            >
                Login
            </Link>
        )
    }

    return (
        <div className="flex items-center space-x-4">
            <Link 
                href={'/my-account'} 
                title='My account'
                className="flex items-center space-x-2"
            >
                <span>Welcome, {data.user_name}</span>
                <UserAvatar/>
            </Link>
            <LogoutButton/>
        </div>
    )
}
