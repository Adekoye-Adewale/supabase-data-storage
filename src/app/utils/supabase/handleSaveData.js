import { supabase } from '@/app/utils/supabase';
import { toast } from 'react-toastify';

export const handleSaveData = async (updatedData, setData, user) => {

    if (updatedData.user_id !== user.id && user.role !== 1) {
        toast.error("You don't have permission to edit this data");
        return;
    }

    const { id, ...rest } = updatedData;
    const { data, error } = await supabase
        .from('Test Table')
        .update(rest)
        .eq('id', id);

    if (error) {
        console.error('Error updating data:', error);
        toast.error('Failed to update data.');
    } else {
        setData((prevData) => prevData.map((item) => (item.id === id ? updatedData : item)));
        toast.success('Data updated successfully.');
    }
};

