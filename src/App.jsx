import React from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import TodosList from './components/TodosList'

const App = () => {
  return (
    <>
      <h1>Welcome to Redux Toolkit</h1>
      <AddTodo />
      <TodosList />
    </>
  )
}

export default App