import React from 'react';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import useStore from '../../MemoStores/memoStore';
import {Checkbox} from "@mui/material";
import {lightBlue} from "@mui/material/colors"; // 추가

const MemoItem = ({ content, id, onDelete, onUpdate }) => {
    const { editingMemoId, setEditingMemoId } = useStore(); // 추가
    const isEditing = id === editingMemoId; // 추가

    const handleKeyPress = (e, newContent) => {
        if (e.key === 'Enter') {
            toggleEditModeAndUpdate(newContent);
        }
    };

    const toggleEditModeAndUpdate = (newContent) => {

        if (isEditing) {
            onUpdate(id, newContent);
            setEditingMemoId(null); // 추가
        } else {
            setEditingMemoId(id); // 추가
        }
    };

    return (
        <div style={{ padding: '10px', borderBottom: '1px solid #ccc', display: 'flex', justifyContent: 'space-between'}}>
        {/*<Checkbox style={{marginRight: "10px"}}/>*/}
            {isEditing ? (
                <Input defaultValue={content} onBlur={(e) => toggleEditModeAndUpdate(e.target.value)}
                       onKeyPress={(e) => handleKeyPress(e, e.target.value)}  // 이 부분을 추가

                />
            ) : (
                <span>{content}</span>
            )}
<div>
<Button style={{color: "black", backgroundColor: "red", marginLeft: "3px"}} aria-label="Delete Memo" onClick={() => onDelete(id)}>삭제</Button>
<Button style={{ color: "black", backgroundColor: "lightblue", marginLeft: "7px"}} aria-label="Update Memo" onClick={() => toggleEditModeAndUpdate(content)}>{isEditing ? '완료' : '수정'}</Button>
</div>
        </div>
    );
};

export default React.memo(MemoItem);
