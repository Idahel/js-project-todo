import { useState } from 'react'
import { useTodoStore } from '../stores/useTodoStore'

export const TodoForm = () => {
  const [taskText, setTaskText] = useState('')
  const [dueDate, setDueDate] = useState('')
  const addTask = useTodoStore((state) => state.addTask)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (taskText.trim()) {
      addTask(taskText, dueDate)
      setTaskText('')
      setDueDate('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Add a new task..."
        aria-label="Add task text"
      />
      <div className='dueDate-submit-container'>
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        aria-label="Set due date"
      />
      <button type="submit">Add Task</button>
      </div>
    </form>
  )
}