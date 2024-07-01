import { supabase } from "./supabaseClient";

export async function FetchAndDisplayData() {
    const { data, error } = await supabase
        .from('Test Table')
        .select('*');

    if (error) {
        console.error('Error fetching data:', error);
        return [];
    }
    return data;
}