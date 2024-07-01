'useclient'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { supabase } from '../api/supabaseClient';
import useUserRole from './useUserRole';

const withAuth = (WrappedComponent, allowedRoles = []) => {
    return (props) => {
        const router = useRouter();
        const user = supabase.auth.user();
        const { role, loading } = useUserRole(user?.id);

        useEffect(() => {
            if (!loading && (!user || !allowedRoles.includes(role))) {
                router.push('/login');
            }
        }, [loading, user, role]);

        if (loading || !user || !allowedRoles.includes(role)) {
            return <p>Loading...</p>;
        }

        return <WrappedComponent {...props} />;
    };
};

export default withAuth;