"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/app/utils/supabase';
import Modal from '@/components/notification/modal';
import Link from 'next/link';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [modalSuccess, setModalSuccess] = useState(false);
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        setShowModal(false);

        try {
            const { data: { user }, error: loginError } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (loginError) {
                console.error('Login Error:', loginError.message);
                setModalMessage(loginError.message);
                setModalSuccess(false);
                setShowModal(true);
                return;
            }

            if (!user) {
                console.error('Login failed: User not found');
                setModalMessage('Login failed. Please try again.');
                setModalSuccess(false);
                setShowModal(true);
                return;
            }

            console.log('User:', user);

            const { data: profileData, error: profileError } = await supabase
                .from('user_profiles')
                .select('id')
                .eq('id', user.id)
                .single();

            if (profileError) {
                if (profileError.message === 'JSON object requested, multiple (or no) rows returned') {
                    console.error('User profile not found');
                    setModalMessage('User profile not found. Redirecting to login page...');
                    setModalSuccess(false);
                    setShowModal(true);
                    setTimeout(() => {
                        router.push('/login');
                    }, 3000);
                    return;
                } else {
                    console.error('Profile Fetch Error:', profileError.message);
                    setModalMessage('Error fetching user profile.');
                    setModalSuccess(false);
                    setShowModal(true);
                    return;
                }
            }

            const { data: roleData, error: roleError } = await supabase
                .from('user_profiles')
                .select('role_id')
                .eq('id', user.id)
                .single();

            if (roleError) {
                console.error('Role Fetch Error:', roleError.message);
                setModalMessage('Error fetching user role.');
                setModalSuccess(false);
                setShowModal(true);
                return;
            }

            const roleId = roleData.role_id;

            console.log('Role ID:', roleId);

            const { data: roleNameData, error: roleNameError } = await supabase
                .from('roles')
                .select('full_name') 
                .eq('id', roleId)
                .single();

            if (roleNameError) {
                console.error('Role Name Fetch Error:', roleNameError.message);
                setModalMessage('Error fetching role name.');
                setModalSuccess(false);
                setShowModal(true);
                return;
            }

            if (!roleNameData) {
                console.error('Role name data not found for role ID:', roleId);
                setModalMessage('Role name data not found.');
                setModalSuccess(false);
                setShowModal(true);
                return;
            }

            setModalMessage('Login successful! Redirecting to home page in 3sec...');
            setModalSuccess(true);
            setShowModal(true);

            setTimeout(() => {
                window.location.href = '/';
            }, 3000);

        } catch (err) {
            console.error('Unexpected Error:', err);
            setModalMessage('An unexpected error occurred. Please try again.');
            setModalSuccess(false);
            setShowModal(true);
        }
    };

    return (
        <main className='px-4 py-10'>
            <form onSubmit={handleLogin} className="border border-gray-900/10 p-8 rounded-md bg-slate-50 max-w-screen-md w-full m-auto">
                <span className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                    <span className="col-span-3 sm:col-span-full">
                        <label 
                            htmlFor="email" 
                            className="text-base font-semibold leading-7 text-gray-900"
                        >
                          Email
                        </label>
                        <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            placeholder="Email" 
                            required 
                            className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </span>
                    <span className="col-span-3 sm:col-span-full">
                        <label 
                            htmlFor="password" 
                            className="text-base font-semibold leading-7 text-gray-900"
                        >
                            Password
                        </label>
                        <input 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            placeholder="Password" 
                            required  
                            className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </span>
                    
                    <span className='flex gap-2 justify-end items-center col-span-full'>
                        <button 
                            type="submit" 
                            className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3 rounded-md cursor-pointer"
                        >
                            Login
                        </button>

                        <Link  
                            href={'/signup'}
                            className=" text-sky-800 underline cursor-pointer"
                        >
                            Create account
                        </Link>
                    </span>                    
                </span>                
            </form>
            <Modal
                show={showModal}
                message={modalMessage}
                onClose={() => setShowModal(false)}
                success={modalSuccess}
            />
        </main>
    );
}

export default Login;
