import { useTodoStore } from '../stores/useTodoStore'

export const TaskCount = () => {
  const tasks = useTodoStore((state) => state.tasks)
  const completedTasks = tasks.filter(task => task.completed).length
  const uncompletedTasks = tasks.filter(task => !task.completed).length

  return (
    <div className="task-count">
      <p>Total Tasks: {tasks.length}</p>
      <p>Completed: {completedTasks}</p>
      <p>Uncompleted: {uncompletedTasks}</p>
    </div>
  )
}