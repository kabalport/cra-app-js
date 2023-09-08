// MemoPage.js
import React, { useEffect, useState } from "react";
import useStore from "../stores/memoStore";
import { v4 as uuidv4 } from "uuid";
import MemoTemplate from "../templates/MemoTemplate";

const MemoPage = () => {
    const { memos, newMemo, isLoaded, setNewMemo, addMemo, deleteMemo, updateMemo, setMemos, setIsLoaded } = useStore();

    // 앱 로딩 시 로컬 스토리지에서 메모를 불러옵니다.
    useEffect(() => {
        try {
            const savedMemos = JSON.parse(localStorage.getItem('memos')) || [];
            console.log("Loaded memos:", savedMemos);  // 디버깅용
            setMemos(savedMemos);
            setIsLoaded(true);  // 앱 로딩이 끝났음을 표시합니다.
        } catch (error) {
            console.error("Could not load memos:", error);
        }
    }, []);

    // 로컬 스토리지를 업데이트합니다. 단, 앱 로딩이 끝난 후에만 실행됩니다.
    useEffect(() => {
        if (isLoaded) {  // isLoaded가 true일 때만 실행
            try {
                console.log("Saving memos:", memos);  // 디버깅용
                localStorage.setItem('memos', JSON.stringify(memos));
            } catch (error) {
                console.error("Could not save memos:", error);
            }
        }
    }, [memos, isLoaded]); // 의존성 배열에 isLoaded를 추가했습니다.

    const handleAddMemo = () => {
        if (newMemo.trim() === '') {
            alert('Memo cannot be empty');
            return;
        }
        addMemo({ id: uuidv4(), content: newMemo });
        setNewMemo('');
    };

    const handleUpdateMemo = (id, newContent) => {
        updateMemo(id, newContent);
    };

    return (
        <MemoTemplate
            memos={memos}
            newMemo={newMemo}
            setNewMemo={setNewMemo}
            onAdd={handleAddMemo}
            onDelete={deleteMemo}
            onUpdate={handleUpdateMemo}
        />
    );
};

export default MemoPage;
