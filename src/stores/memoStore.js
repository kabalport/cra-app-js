import create from 'zustand';

const useStore = create((set) => ({
    memos: [],
    newMemo: '',
    isLoaded: false, // 추가
    setIsLoaded: (status) => set({ isLoaded: status }), // 추가
    editingMemoId: null, // 추가
    setMemos: (newMemos) => set({ memos: newMemos }),
    setNewMemo: (newMemo) => set({ newMemo }),
    setEditingMemoId: (id) => set({ editingMemoId: id }), // 추가
    addMemo: (memo) => set((state) => ({ memos: [...state.memos, memo], newMemo: '' })),
    deleteMemo: (id) => set((state) => ({ memos: state.memos.filter((memo) => memo.id !== id) })),
    updateMemo: (id, newContent) => set((state) => ({
        memos: state.memos.map((memo) => (memo.id === id ? { ...memo, content: newContent } : memo)),
    })),
}));


export default useStore;