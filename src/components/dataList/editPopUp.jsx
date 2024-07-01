import React, { useState } from 'react';

function EditPopup({ data, onClose, onSave }) {
    const [formData, setFormData] = useState(data);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await onSave(formData);
        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur">
            <div className="bg-white text-gray-700 p-4 rounded shadow-lg w-full max-w-lg">
                <h2 className="text-lg text-black font-bold mb-4">Edit Data</h2>
                <form onSubmit={handleSubmit}>
                    <label className="block mb-2 text-slate-950">
                        Full Name:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="block w-full mt-1 border rounded p-2"
                        />
                    </label>
                    <label className="block mb-2 text-slate-950">
                        Email Address:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="block w-full mt-1 border rounded p-2"
                        />
                    </label>
                    <label className="block mb-2 text-slate-950">
                        Phone Number:
                        <input
                            type="text"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className="block w-full mt-1 border rounded p-2"
                        />
                    </label>
                    <label className="block mb-4 text-slate-950">
                        Message:
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="block w-full mt-1 border rounded p-2"
                        />
                    </label>
                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={onClose}
                            className="mr-2 px-4 py-2 border rounded bg-gray-300"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 border rounded bg-blue-500 text-white"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditPopup;