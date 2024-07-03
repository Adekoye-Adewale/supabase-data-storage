import { createBrowserClient } from '@supabase/ssr'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase URL or anonymous key.');
}

const supabase = createBrowserClient(supabaseUrl, supabaseAnonKey);

export default supabase;


// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
// const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
// const supabaseUrl = 'https://ktsnrdglkwvgcmatevgt.supabase.co';
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt0c25yZGdsa3d2Z2NtYXRldmd0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk2MDA4ODksImV4cCI6MjAzNTE3Njg4OX0.UCKQK9N8D_2byny1E8M4xLeVwLiF48b1pjTIp8U2KGc';

// export const supabase = createClient(supabaseUrl, supabaseKey);

