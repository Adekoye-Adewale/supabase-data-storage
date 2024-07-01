import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ show, message, onClose, success }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90">
            <div className="bg-white p-4 rounded shadow-lg w-1/3">
                <div className={`border-b-2 p-2 ${success ? 'border-green-500' : 'border-red-500'}`}>
                    <h2 className={`text-lg font-semibold ${success ? 'text-green-500' : 'text-red-500'}`}>
                        {success ? 'Success' : 'Error'}
                    </h2>
                </div>
                <div className="p-2 text-zinc-900">
                    <p>{message}</p>
                </div>
                <div className="flex justify-end mt-4">
                    <button 
                        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700" 
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
    };

Modal.propTypes = {
    show: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    success: PropTypes.bool.isRequired,
};

export default Modal;
