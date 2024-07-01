import { supabase } from './supabaseClient';
import { toast } from 'react-toastify';

export const handleSaveData = async (updatedData, setData) => {
    const { error } = await supabase
        .from('Test Table')
        .update(updatedData)
        .eq('id', updatedData.id);

    if (error) {
        console.error('Error updating data:', error);
        toast.error('Failed to update data.');
        return;
    }

    setData((prevData) =>
        prevData.map((item) =>
            item.id === updatedData.id ? updatedData : item
        )
    );
    toast.success('Data updated successfully.');
};
