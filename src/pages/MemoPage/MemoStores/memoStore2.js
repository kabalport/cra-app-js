/**
 * useStore.js
 * zustandd라이브러리르 사용하여 react앱의 상태를 관리합니다.
 * zustand는 상태관리를 단순하게 만들어주는 작은 라이브러리입니다.
 * 상태(State)
 * 1. memos: 이 배열은 메모 목록을 저장합니다.
 * 2. newMemo: 이 문자열은 새로 생성될 메모의 내용을 저장합니다.
 * 3. isLoaded: 이 불러인 겂은 데이터가 로딩이 되었는지 여부를 나타냅니다.
 * 4. editingMemoId: 이 값은 현재 편집 중인 메모의 ID를 저장합니다. null 이면 편집 중인 메모가 없다는 것을 의미합니다.
 * 액션(Actions)
 * 1. setIsLoaded: 데이터 로딩 완료 여부를 설정합니다.
 * 2. setMemos: 새로운 메모목록을 설정합니다.
 * 3. setNewMemo: 새로운 메모의 내용을 설정합니다.
 * 4. setEdtingMemoId: 현재 편집중인 메모의 ID를 설정합니다.
 * 5. addMemo: 새 메모를 추가합니다. 추가 후 newMemo는 빈 문자열로 초기화됩니다.
 * 6. deleteMemo: 지정된 아이디의 메모를 삭제합니다.
 * 7. updateMemo: 지정된 ID의 메모 내용을 업데이트 합니다.
 *
 */

import create from 'zustand';

const memoStore2 = create((set) => ({
    // 상태: 메모 목록
    memos: [],
    // 상태: 새로 생성할 메모의 내용
    newMemo: '',
    // 상태: 데이터 로딩 완료 여부
    isLoaded: false, // 추가
    // 액션: 데이터 로딩 완료 여부 설정
    setIsLoaded: (status) => set({ isLoaded: status }),
    // 상태: 현재 편집 중인 메모의 ID
    editingMemoId: null, // 추가
    // 액션: 메모 목록 설정
    setMemos: (newMemos) => set({ memos: newMemos }),
    // 액션: 새로운 메모의 내용 설정
    setNewMemo: (newMemo) => set({ newMemo }),
    // 액션: 현재 편집 중인 메모의 ID 설정
    setEditingMemoId: (id) => set({ editingMemoId: id }),
    // 액션: 새 메모 추가
    addMemo: (memo) => set((state) => ({ memos: [...state.memos, memo], newMemo: '' })),
    // 액션: 메모 삭제
    deleteMemo: (id) => set((state) => ({ memos: state.memos.filter((memo) => memo.id !== id) })),
    // 액션: 메모 업데이트
    updateMemo: (id, newContent) => set((state) => ({
        memos: state.memos.map((memo) => (memo.id === id ? { ...memo, content: newContent } : memo)),
    })),

}));

// Zustand 스토어를 export
export default memoStore2;
