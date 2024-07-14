'use client'
import React, { useEffect, useState } from 'react';
import { FetchAndDisplayData, handleConfirmDelete, handleSaveData, handleAddData} from '../../app/utils/supabase';
import EditPopup from '@/components/dataList/editPopUp';
import DeletePopUp from '@/components/dataList/deleteData';
import AddDataPopup from './AddDataPopup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFetchUserData } from '@/app/utils/supabase/useFetchUserData';
import Skeleton from './skeleton';
import TableDownloadButton from './tableDownloadBTN';

export default function DataSet() {
    const [data, setData] = useState([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
    const [isAddPopupOpen, setIsAddPopupOpen] = useState(false);
    const [selectedData, setSelectedData] = useState(null);
    const [dataToDelete, setDataToDelete] = useState(null);

    const { loading, isLoggedIn, user } = useFetchUserData();
    const isAdmin = user?.role_id === 1;
    
    useEffect(() => {
        const fetchData = async () => {
            const fetchedData = await FetchAndDisplayData();
            setData(fetchedData);
        };

        fetchData();
    }, []);

    const handleEditClick = (item) => {
        if (item.user_id === user.id || user.role_id === 1) {
            setSelectedData(item);
            setIsPopupOpen(true);
        } else {
            toast.error("You don't have permission to edit this data");
        }
    };

    const handleDeleteClick = (item) => {
        if (user.role_id === 1) {
            setDataToDelete(item);
            setIsDeletePopupOpen(true);
        } else {
            toast.error("You don't have permission to delete this data");
        }
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
        setSelectedData(null);
    };

    const handleCloseDeletePopup = () => {
        setIsDeletePopupOpen(false);
        setDataToDelete(null);
    };

    const handleAddClick = () => {
        setIsAddPopupOpen(true);
    };

    const handleCloseAddPopup = () => {
        setIsAddPopupOpen(false);
    };

    if (loading) {
        return (
            <Skeleton />
        );
    }

    return (
        <div className='w-full overflow-x-auto'>
            <ToastContainer />
            <div className="flex sm:justify-end content-center gap-2 py-4">
                {( isLoggedIn || isAdmin ) && (
                    <button
                        onClick={handleAddClick}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        Add Data
                    </button>
                ) }
                <TableDownloadButton 
                    data={data}
                />
            </div>
            
            <table className="table-fixed 2xl:w-full 2xl:table-auto border-separate border-spacing-2 border border-slate-500">
                <thead className="text-left bg-cyan-900">
                    <tr>
                        <th className="table-head-column table-body-column">id</th>
                        <th className="table-head-column table-body-column">Full Name</th>
                        <th className="table-head-column table-body-column">Email Address</th>
                        <th className="table-head-column table-body-column">Phone Number</th>
                        <th className="table-head-column table-body-column">Message</th>
                        {isLoggedIn ? <th className="table-head-column table-body-column">Actions</th> : null}
                    </tr>
                </thead>
                <tbody>
                    {data.map((set) => (
                        <tr key={set.id}>
                            <td className="table-body-column">{set.id}</td>
                            <td className="table-body-column">{set.name}</td>
                            <td className="table-body-column">{set.email}</td>
                            <td className="table-body-column">{set.phoneNumber}</td>
                            <td className="table-body-column">{set.message}</td>
                            {isLoggedIn ? (
                                <td className="table-body-column">
                                    <div className="flex gap-2 justify-center items-center">
                                        <svg
                                            onClick={() => handleEditClick(set)}
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 cursor-pointer"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12l9 9m0 0l-9-9m9 9H3" />
                                        </svg>
                                        <svg
                                            onClick={() => handleDeleteClick(set)}
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 cursor-pointer text-red-600"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                </td>
                            ) : null}
                        </tr>
                    ))}
                </tbody>
            </table>
            
            {isPopupOpen && selectedData && (
                <EditPopup
                    data={selectedData}
                    onClose={handleClosePopup}
                    onSave={(updatedData) => handleSaveData(updatedData, setData, user)}
                    isAdmin={isAdmin}
                />
            )}
            {isDeletePopupOpen && (
                <DeletePopUp
                    onConfirm={() => handleConfirmDelete(dataToDelete, setData, setIsDeletePopupOpen, user)}
                    onCancel={handleCloseDeletePopup}
                />
            )}
            {isAddPopupOpen && (
                <AddDataPopup
                    onClose={handleCloseAddPopup}
                    onSave={(newData) => handleAddData(newData, setData, user)}
                    userId={user.id}
                />
            )}
        </div>
    );
}