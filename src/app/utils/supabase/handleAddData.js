import supabase from "./client";
import { toast } from 'react-toastify';

export const handleAddData = async (newData, setData, user) => {
    newData.user_id = user.id;
    try {
        const { data, error } = await supabase
            .from('Test Table')
            .insert([
                { 
                    name: newData.name,
                    email: newData.email,
                    phoneNumber: newData.phoneNumber,
                    message: newData.message,
                    user_id: newData.user_id,
                }
            ]);

        console.log('Supabase insert response:', { data, error });

        if (error) {
            console.error('Error adding data:', error);
            toast.error('Error adding data.');
        } else if (data) {
            setData((prevData) => [...prevData, ...data]);
            toast.success('Data added successfully.');
        } else {
            console.error('Unexpected response format:', data);
            toast.error('Data saved, but an unexpected error occurred.');
        }
    } catch (err) {
        console.error('Unexpected error:', err);
        toast.error('An unexpected error occurred.');
    }
};