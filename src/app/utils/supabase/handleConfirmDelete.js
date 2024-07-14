import { supabase } from '@/app/utils/supabase';
import { toast } from 'react-toastify';

export const handleConfirmDelete = async (dataToDelete, setData, setIsDeletePopupOpen) => {

    if (user.role_id !== 1) {
        toast.error("You don't have permission to delete this data");
        return;
    }

    const { id } = dataToDelete;
    const { data, error } = await supabase
        .from('Test Table')
        .delete()
        .eq('id', id);

    if (error) {
        console.error('Error deleting data:', error);
        toast.error('Failed to delete data.');
    } else {
        setData((prevData) => prevData.filter((item) => item.id !== id));
        toast.success('Data deleted successfully.');
    }
    setIsDeletePopupOpen(false);
};