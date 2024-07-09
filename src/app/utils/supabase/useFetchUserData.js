'use client'
import { useState, useEffect } from 'react';
import { UserData } from '.';


export const useFetchUserData = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userProfile = await UserData();

                if (userProfile) {
                    setData(userProfile);
                } else {
                    setData({
                        user_name: '未登录',
                        full_name: 'User not logged in',
                        email: '',
                        phone_number: '',
                    });
                }
            } catch (error) {
                console.error("Error fetching user:", error);
                setData({
                    user_name: '未登录',
                    full_name: 'Error fetching user data',
                    email: '',
                    phone_number: '',
                });
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { data, loading };
};