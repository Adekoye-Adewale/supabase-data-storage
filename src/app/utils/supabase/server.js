import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export const createClientAll = async () => {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  
    const cookieStore = cookies();
    const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
      cookies: {
        get(name) {
          return cookieStore.get(name)?.value;
        },
        set(name, value, options) {
          try {
            cookieStore.set({ name, value, ...options });
          } catch (error) {}
        },
        remove(name, options) {
          try {
            cookieStore.set({ name, value: '', ...options });
          } catch (error) {}
        },
      },
    });
  
    try {
      const { data, error } = await supabase.from('user_profiles').select('*');
      if (error) {
          console.error('Error fetching user profiles:', error);
          return { data: null, error };
      }
      return { data, error: null };
    } catch (error) {
        console.error('Unexpected error:', error);
        return { data: null, error };
    }
};

export const createClientSession = async () => {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  
    const cookieStore = cookies();
    const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
        cookies: {
            get(name) {
            return cookieStore.get(name)?.value;
            },
            set(name, value, options) {
            try {
                cookieStore.set({ name, value, ...options });
            } catch (error) {}
            },
            remove(name, options) {
            try {
                cookieStore.set({ name, value: '', ...options });
            } catch (error) {}
            },
        },
    });
  
    const { data: userData, error: userError } = await supabase.auth.getUser();

    if (userError) {
        console.error('Error fetching user:', userError);
        return { data: null, error: userError };
    }

    if (!userData || !userData.user) {
        return { data: null, error: null };
    }

    const { data, error } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('id', userData.user.id)
        .single();

    if (error) {
        console.error('Error fetching user profile:', error);
        return { data: null, error };
    }

    return { data, error: null };
};
