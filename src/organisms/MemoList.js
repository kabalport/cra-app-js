import React from 'react';
import MemoItem from '../molecules/MemoItem';

const MemoList = ({ memos, onDelete, onUpdate }) => {
    return (
        <div>
            {memos.map((memo) => (
                <MemoItem
                    key={memo.id}
                    id={memo.id} // 추가
                    content={memo.content}
                    onDelete={() => onDelete(memo.id)}
                    onUpdate={onUpdate}
                />
            ))}
        </div>
    );
};

export default MemoList;
