import React from 'react';

function DeletePopUp({ onConfirm, onCancel }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur">
            <div className="bg-white text-black p-4 rounded shadow-lg">
                <h2 className="text-lg font-bold mb-4">Confirm Deletion</h2>
                <p>Are you sure you want to delete this item?</p>
                <div className="flex justify-end mt-4">
                    <button
                        type="button"
                        onClick={onCancel}
                        className="mr-2 px-4 py-2 border rounded bg-gray-300"
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        onClick={onConfirm}
                        className="px-4 py-2 border rounded bg-red-500 text-white"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DeletePopUp;
