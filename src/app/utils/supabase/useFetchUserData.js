'use client'
import { useState, useEffect } from 'react';
import { UserData } from '.';


export const useFetchUserData = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userProfile = await UserData();

                if (userProfile) {
                    setData(userProfile);
                    setIsLoggedIn(true);
                } else {
                    setData({
                        user_name: '未登录',
                        full_name: 'User not logged in',
                        email: '',
                        phone_number: '',
                    });
                    setIsLoggedIn(false);
                }
            } catch (error) {
                console.error("Error fetching user:", error);
                setData({
                    user_name: '未登录',
                    full_name: 'Error fetching user data',
                    email: '',
                    phone_number: '',
                });
                setIsLoggedIn(false);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { data, loading, isLoggedIn };
};