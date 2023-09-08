// components/organisms/MemoList.js
import React, { useState } from 'react';
import MemoItem from '../molecules/MemoItem';
import MemoPagination from '../molecules/MemoPagination'; // Import the new component

const MemoList = ({ memos, onDelete, onUpdate }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const totalPages = Math.ceil(memos.length / itemsPerPage);

    const currentMemos = memos.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <div>
            {currentMemos.map((memo) => (
                <MemoItem key={memo.id} {...memo} onDelete={onDelete} onUpdate={onUpdate} />
            ))}
            <MemoPagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </div>
    );
};

export default MemoList;
