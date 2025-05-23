import { useTodoStore } from '../stores/useTodoStore'
import { TodoItem } from './TodoItem'

export const TodoList = () => {
  const tasks = useTodoStore((state) => state.tasks)
  const currentFilter = useTodoStore((state) => state.currentFilter)

  const filteredAndSortedTasks = tasks
    .filter((task) => {
      if (currentFilter === 'completed') {
        return task.completed
      }
      if (currentFilter === 'uncompleted') {
        return !task.completed
      }
      return true
    })

    .sort((a, b) => {
      if (currentFilter === 'newest') {
        return new Date(b.createdAt) - new Date(a.createdAt)
      }
      if (currentFilter === 'oldest') {
        return new Date(a.createdAt) - new Date(b.createdAt)
      }
      if (currentFilter === 'due_date') {
        if (a.dueDate && b.dueDate) {
          return new Date(a.dueDate) - new Date(b.dueDate)
        }
        if (a.dueDate) return -1
        if (b.dueDate) return 1
        return 0
      }
      return 0
    })


  if (tasks.length === 0) {
    return (
      <p className="empty-state">
        No tasks yet! Time to add some.
      </p>
    )
  }

  if (filteredAndSortedTasks.length === 0 && tasks.length > 0) {
    return (
      <p className="empty-state">
        No tasks match the current filter.
      </p>
    )
  }

  return (
    <ul className="todo-list">
      {filteredAndSortedTasks.map((task) => (
        <TodoItem key={task.id} task={task} />
      ))}
    </ul>
  )
}