import { create } from 'zustand';

const useTodoStore = create((set) => ({
  tasks: [],

  addTask: (text) =>
    set((state) => ({
      tasks: [
        ...state.tasks,
        {
          id: Date.now(),
          text,
          completed: false,
          createdAt: new Date(),
        },
      ],
    })),
}));

export default useTodoStore;