import { useTodoStore } from '../stores/useTodoStore'

export const TaskFilter = () => {
  const setFilter = useTodoStore((state) => state.setFilter)
  const currentFilter = useTodoStore((state) => state.currentFilter)

  const filterButtons = [
    { label: 'All', value: 'all' },
    { label: 'Newest First', value: 'newest' },
    { label: 'Oldest First', value: 'oldest' },
    { label: 'Closest Deadline', value: 'due_date' },
    { label: 'Completed', value: 'completed' },
    { label: 'Uncompleted', value: 'uncompleted' },
  ]

  return (
    <div className="task-filters">
      {filterButtons.map((button) => (
        <button
          key={button.value}
          onClick={() => setFilter(button.value)}
          className={currentFilter === button.value ? 'active' : ''}
          aria-pressed={currentFilter === button.value}
        >
          {button.label}
        </button>
      ))}
    </div>
  )
}