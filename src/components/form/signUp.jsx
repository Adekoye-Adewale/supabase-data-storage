"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/components/supabase/supabaseClient';
import Modal from '@/components/notification/modal';
import Link from 'next/link';

const SignupForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [stateOfOrigin, setStateOfOrigin] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [modalSuccess, setModalSuccess] = useState(false);
    const router = useRouter();

    const handleSignup = async (e) => {
        e.preventDefault();
        setShowModal(false);

        try {
            const { user, error: signUpError } = await supabase.auth.signUp({
                email,
                password,
            });

            if (signUpError) {
                setModalMessage(signUpError.message);
                setModalSuccess(false);
                setShowModal(true);
                return;
            }

            const { data: roleData, error: roleError } = await supabase
                .from('roles')
                .select('id')
                .eq('full_name', 'Subscriber') 
                .single();

            if (roleError) {
                setModalMessage('Error fetching role information.');
                setModalSuccess(false);
                setShowModal(true);
                return;
            }

            const { error: profileError } = await supabase
                .from('user_profiles')
                .insert({
                    id: user.id,
                    full_name: fullName,
                    state_of_origin: stateOfOrigin,
                    role_id: roleData.id,
                });

            if (profileError) {
                setModalMessage('Error creating profile.');
                setModalSuccess(false);
                setShowModal(true);
                return;
            }

            setModalMessage('Signup successful! Redirecting to home page...');
            setModalSuccess(true);
            setShowModal(true);
            setTimeout(() => {
                router.push('/');
            }, 3000);
        } catch (err) {
            setModalMessage('An unexpected error occurred. Please try again.');
            setModalSuccess(false);
            setShowModal(true);
        }
    };
  
    const statesOfNigeria = [
      'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno', 'Cross River', 'Delta', 
      'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 
      'Kwara', 'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau', 'Rivers', 'Sokoto', 
      'Taraba', 'Yobe', 'Zamfara', 'FCT'
    ];
  

    return (
        <>
            <form 
                onSubmit={handleSignup}
                className="border border-gray-900/10 p-8 rounded-md bg-slate-50 max-w-screen-md w-full m-auto"
            >
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                    <div className="col-span-3 sm:col-span-3">
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
                    </div>
                    <div className="col-span-3 sm:col-span-3">
                        <label 
                            htmlFor="fullName" 
                            className="text-base font-semibold leading-7 text-gray-900"
                        >
                            Full Name
                        </label>
                        <input type="text" 
                            value={fullName} 
                            onChange={(e) => setFullName(e.target.value)} 
                            placeholder="Full Name" 
                            required 
                            className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                    <div className="col-span-3 sm:col-span-3">
                        <label 
                            htmlFor="stateOfOrigin" 
                            className="text-base font-semibold leading-7 text-gray-900"
                        >
                            State of origin
                        </label>
                        <select 
                            value={stateOfOrigin} 
                            onChange={(e) => setStateOfOrigin(e.target.value)} 
                            required
                            className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        >
                            <option value="" disabled>Select State of Origin</option>
                                {statesOfNigeria.map((state) => (
                                    <option 
                                        key={state}
                                        value={state}
                                    >
                                        {state}
                                    </option>
                                ))}
                        </select>
                    </div>
                    <div className="col-span-3 sm:col-span-3">
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
                    </div>
                    <div className="col-span-6 text-base leading-7 text-gray-900">
                        <input 
                            type="submit"
                            value="Sign Up"
                            className="w-full bg-sky-700 px-4 py-2 text-white transition-all duration-300 hover:bg-sky-900 sm:px-8 sm:py-3 rounded-md cursor-pointer"
                        />
                    </div>
                    <Link 
                        href={'/login'} 
                        title={'Login'}
                        className="col-span-6 bg-transparent border-2 border-sky-700 px-4 py-2 text-base leading-7 text-center text-sky-700 transition-all duration-300 hover:bg-sky-800 hover:text-white sm:px-8 sm:py-3 rounded-md cursor-pointer"
                    >
                        Login
                    </Link>
                </div>
            </form>

            <Modal
                show={showModal}
                message={modalMessage}
                onClose={() => setShowModal(false)}
                success={modalSuccess}
            />
        </>
    );
};

export default SignupForm;
