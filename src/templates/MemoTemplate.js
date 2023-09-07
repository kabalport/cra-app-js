import React from "react";
import MemoInput from "../molecules/MemoInput";
import MemoList from "../organisms/MemoList";
import MemoTitle from "../molecules/MemoTitle";

const MemoTemplate = ({ memos, newMemo, setNewMemo, onAdd, onDelete, onUpdate }) => {
    return (
        <div>
            <MemoTitle title="할일목록" />
            <MemoInput value={newMemo} onChange={(e) => setNewMemo(e.target.value)} onAdd={onAdd} />
            <MemoList memos={memos} onDelete={onDelete} onUpdate={onUpdate} /> {/* 수정 */}
        </div>
    );
};

export default MemoTemplate;