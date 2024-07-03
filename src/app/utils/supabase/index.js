import supabase from '@/app/utils/supabase/client';
import { FetchAndDisplayData } from "./fetchDataList";
import { handleSaveData } from "./handleSaveData";
import { handleConfirmDelete } from "./handleConfirmDelete";

export { supabase, FetchAndDisplayData, handleConfirmDelete, handleSaveData };