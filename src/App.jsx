import React from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import TodosList from './components/TodosList'

const App = () => {
  return (
    <>
      <h1 className='text-2xl font-bold mb-8 mt-2'>Manage Your Todos'</h1>
      <AddTodo />
      <TodosList />
    </>
  )
}

export default App