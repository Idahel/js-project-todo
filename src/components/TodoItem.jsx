import { useTodoStore } from '../stores/useTodoStore'

export const TodoItem = ({ task }) => {
  const toggleTask = useTodoStore((state) => state.toggleTask)
  const removeTask = useTodoStore((state) => state.removeTask)

  const formatDate = (dateString) => {
    if (!dateString) return ''
    const date = new Date (dateString)
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    })
  }

  const isOverDue = task.dueDate && !task.completed && new Date(task.dueDate) < new Date ()

  return (
    <li className={`todo-item ${task.completed ? 'completed' : ''} ${isOverDue ? 'overdue' : ''}`}>
        <div className='task-main-content'>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                aria-label={`Mark ${task.text} as ${task.completed ? 'uncompleted' : 'completed'}`}
            />
            <span className="task-text">{task.text}</span>
            <button onClick={() => removeTask(task.id)} aria-label={`Remove ${task.text}`}>
            <span>Remove task</span>
            </button>
        </div>

        <div className='task-meta'>
            {task.createdAt && (
                <span className='task-date created-at'>
                    Added: {formatDate(task.createdAt)}
                </span>
            )}
            {task.dueDate && (
                <span className={`task-date due-date ${isOverDue ? 'overdue-text' : ''}`}>
                    Due: {formatDate(task.dueDate)}
                </span>
            )}
        </div>
    </li>
  )
}