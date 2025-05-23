import { Header } from './components/Header'
import { TodoForm } from './components/TodoForm'
import { TaskCount } from './components/TaskCount'
import { TaskFilter } from './components/TaskFilter'
import { TodoList } from './components/TodoList'
import './App.css'

export const App = () => {
  return (
    <>
      <Header />
      <TodoForm />
      <TaskCount />
      <TaskFilter />
      <TodoList />
    </>
  )
}
