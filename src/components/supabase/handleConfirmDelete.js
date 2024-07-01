import { supabase } from './supabaseClient';
import { toast } from 'react-toastify';

export const handleConfirmDelete = async (dataToDelete, setData, setIsDeletePopupOpen) => {
    const { error } = await supabase
        .from('Test Table')
        .delete()
        .eq('id', dataToDelete.id);

    if (error) {
        console.error('Error deleting data:', error);
        toast.error('Failed to delete data.');
        return;
    }

    setData((prevData) => 
        prevData.filter((item) => 
            item.id !== dataToDelete.id));
    setIsDeletePopupOpen(false);
    toast.success('Data deleted successfully.');
};
