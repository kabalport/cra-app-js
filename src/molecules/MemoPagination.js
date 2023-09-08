// components/molecules/MemoPagination.js
import React from 'react';

const MemoPagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div className="flex justify-between items-center mt-4">
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                disabled={currentPage <= 1}
                onClick={() => onPageChange(currentPage - 1)}
            >
                Previous
            </button>
            <span className="text-xl">{currentPage} / {totalPages}</span>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                disabled={currentPage >= totalPages}
                onClick={() => onPageChange(currentPage + 1)}
            >
                Next
            </button>
        </div>
    );
};

export default MemoPagination;
