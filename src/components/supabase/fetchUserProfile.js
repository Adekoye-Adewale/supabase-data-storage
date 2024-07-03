import { supabase } from "./supabaseClient";

export const FetchUserProfile = async () => {
    const { data: profile, error } = await supabase
        .from('profiles')
        .select('user_avatar')
        .single();

    if (error) {
        console.error('Error fetching user profile:', error);
        return null;
    }

    return profile;
};