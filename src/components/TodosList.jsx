import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice'

const TodosList = () => {

  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  return (
    <>
      <div>Todos</div>
      {todos.map((eachTodo) => (
        <li key={eachTodo.id} className='mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded-lg shadow-xl'>
        
        <div className='text-white'>{eachTodo.textValue}</div>

        <button onClick={() => dispatch(removeTodo(eachTodo.id))} className='text-white bg-red-500 hover:bg-red-600 border-0 py-1 px-4 focus:outline-none rounded text-lg'>
          <svg xmlns="http://www.w3.org/2000/svg" className='size-6' viewBox="0 0 24 24"><path fill="currentColor" d="M18 19a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V7H4V4h4.5l1-1h4l1 1H19v3h-1zM6 7v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V7zm12-1V5h-4l-1-1h-3L9 5H5v1zM8 9h1v10H8zm6 0h1v10h-1z"/></svg>
        </button>
      </li>
      ))}
    </>
  )
}

export default TodosList



// NOTES:
// we're using useSelector() here to get the current state of the todos array from the store.

// we're using useDispatch() here to dispatch actions(remove and update) to the store.