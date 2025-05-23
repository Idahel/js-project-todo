import { create } from 'zustand'

export const useTodoStore = create((set) => ({
  tasks: [],
  currentFilter: 'all',

  //action to add new task
  addTask: (text, dueDate = null) =>
    set((state) => ({
      tasks: [
        ...state.tasks,
        {
          id: Date.now().toString(),
          text,
          completed: false,
          createdAt: new Date().toISOString(),
          dueDate: dueDate ? new Date(dueDate).toISOString() : null, 
        },
      ],
    })),

//action to toggle task if completed or not
  toggleTask: (id) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    })),

//action to remove task
  removeTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    })),

//action to set the current filter
  setFilter: (filterType) => set({ currentFilter: filterType }),
}))