import supabase from "./client";
import { toast } from 'react-toastify';

export const handleAddData = async (newData, setData) => {
    const { name, email, phoneNumber, message } = newData;

    const { data, error } = await supabase
        .from('Test Table')
        .insert([{ name, email, phoneNumber, message }]);

    if (error) {
        console.error('Error adding data:', error);
        toast.error('Error adding data.');
    } else if (data && Array.isArray(data)) {
        setData((prevData) => [...prevData, ...data]);
        toast.success('Data added successfully.');
    } else {
        console.error('Unexpected response format:', data);
        toast.error('Unexpected response format.');
    }
};