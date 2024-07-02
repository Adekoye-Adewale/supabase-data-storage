'use client'
import React, { useEffect, useState } from 'react';
import { FetchAndDisplayData, handleConfirmDelete, handleSaveData } from '../supabase';
import EditPopup from '@/components/dataList/editPopUp';
import DeletePopUp from '@/components/dataList/deleteData';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function DataSet() {
    const [data, setData] = useState([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
    const [selectedData, setSelectedData] = useState(null);
    const [dataToDelete, setDataToDelete] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const fetchedData = await FetchAndDisplayData();
            setData(fetchedData);
        };

        fetchData();
    }, []);

    const handleEditClick = (item) => {
        setSelectedData(item);
        setIsPopupOpen(true);
    };

    const handleDeleteClick = (item) => {
        setDataToDelete(item);
        setIsDeletePopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
        setSelectedData(null);
    };

    const handleCloseDeletePopup = () => {
        setIsDeletePopupOpen(false);
        setDataToDelete(null);
    };

    return (
        <div>
            <ToastContainer />
            <table className="table-fixed border-separate border-spacing-2 border border-slate-500">
                <thead className="text-left bg-cyan-900">
                    <tr>
                        <th className="border border-slate-600 py-2 px-4 transition-all duration-300 hover:bg-cyan-600">
                            id
                        </th>
                        <th className="border border-slate-600 py-2 px-4 transition-all duration-300 hover:bg-cyan-600">
                            Full Name
                        </th>
                        <th className="border border-slate-600 py-2 px-4 transition-all duration-300 hover:bg-cyan-600">
                            Email Address
                        </th>
                        <th className="border border-slate-600 py-2 px-4 transition-all duration-300 hover:bg-cyan-600">
                            Phone Number
                        </th>
                        <th className="border border-slate-600 py-2 px-4 transition-all duration-300 hover:bg-cyan-600">
                            Message
                        </th>
                        <th className="border border-slate-600 py-2 px-4 transition-all duration-300 hover:bg-cyan-600">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((set) => (
                        <tr key={set.id}>
                            <td className="border border-slate-700 py-2 px-4">{set.id}</td>
                            <td className="border border-slate-700 py-2 px-4">{set.name}</td>
                            <td className="border border-slate-700 py-2 px-4">{set.email}</td>
                            <td className="border border-slate-700 py-2 px-4">{set.phoneNumber}</td>
                            <td className="border border-slate-700 py-2 px-4">{set.message}</td>
                            <td className="border border-slate-700 py-2 px-4">
                                <div className="flex gap-2 justify-center items-center">
                                    <svg
                                        onClick={() => handleEditClick(set)}
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 cursor-pointer"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M15 12l9 9m0 0l-9-9m9 9H3"
                                        />
                                    </svg>
                                    <svg
                                        onClick={() => handleDeleteClick(set)}
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 cursor-pointer text-red-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {isPopupOpen && selectedData && (
                <EditPopup
                    data={selectedData}
                    onClose={handleClosePopup}
                    onSave={(updatedData) => handleSaveData(updatedData, setData)}
                />
            )}
            {isDeletePopupOpen && (
                <DeletePopUp
                onConfirm={() => handleConfirmDelete(dataToDelete, setData, setIsDeletePopupOpen)}
                onCancel={handleCloseDeletePopup}
                />
            )}
        </div>
    );
}