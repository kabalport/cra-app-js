import React from "react";
import MemoInput from "../molecules/MemoInput";
import MemoList from "../organisms/MemoList";
import MemoTitle from "../molecules/MemoTitle";
import {Container} from "@mui/material";

const MemoTemplate = ({ memos, newMemo, setNewMemo, onAdd, onDelete, onUpdate }) => {
    return (
        <Container style={{maxWidth: "100%", width: "100%"}}>
            <MemoTitle title="할일목록" />
            <MemoInput value={newMemo} onChange={(e) => setNewMemo(e.target.value)} onAdd={onAdd} />
            <MemoList memos={memos} onDelete={onDelete} onUpdate={onUpdate} /> {/* 수정 */}
        </Container>
    );
};

export default MemoTemplate;


