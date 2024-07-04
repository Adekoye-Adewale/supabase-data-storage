import { supabase } from '@/app/utils/supabase';

export const FetchUserProfile = async () => {
    const { data: profile, error } = await supabase
        .from('user_profiles')
        .select('user_name, full_name, email, user_avatar, cover_img')
        .single();

    if (error) {
        console.error('Error fetching user profile:', error);
        return null;
    }

    return profile;
};

export async function UserAvatar() {
    let userProfile = null;
    try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session) {
            const { data, error } = await supabase
                .from('user_profiles')
                .select('user_name, full_name, email, phone_number, user_avatar, cover_img')
                .eq('id', session.user.id)
                .single();

            if (error) {
                throw error;
            }

            userProfile = data;
        }
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
    
    return userProfile;
}