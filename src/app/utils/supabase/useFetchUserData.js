import { useState, useEffect } from 'react';
import supabase from './client';

export const useFetchUserData = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            const { data, error } = await supabase.auth.getSession();
            if (error) {
                console.error('Error fetching user:', error);
                setLoading(false);
                return;
            }

            if (data.session) {
                const { user } = data.session;
                const { data: userData, error: userError } = await supabase
                    .from('user_profiles')
                    .select('*')
                    .eq('id', user.id)
                    .single();

                if (userError) {
                    console.error('Error fetching user data:', userError);
                } else {
                    setUser(userData);
                    setIsLoggedIn(true);
                }
            }
            setLoading(false);
        };

        fetchUser();
    }, []);

    return { loading, isLoggedIn, user };
};
