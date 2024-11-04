import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

const AddTodo = () => {

    const [input, setInput] = useState('')
    
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        if (!input.trim()) return alert('Please enter a task!')
        dispatch(addTodo(input))
        setInput('')
    }

    return (
        <form onSubmit={addTodoHandler} className='space-x-3 mt-12'>
            <input type="search" value={input} onChange={(e) => setInput(e.target.value)} className='bg-gray-800 text-white rounded border border-gray-700 focus:ring-2 focus:ring-indigo-900 px-3 py-1 leading-8 transition-colors duration-1000 ease-in-out' placeholder='Enter a task...' />

            <button type='submit' className='bg-indigo-500 text-white border-0 px-6 py-2 rounded focus:outline-none hover:bg-indigo-600 text-lg'>Add Task</button>
        </form>
    )
}

export default AddTodo


// NOTES:
// AddTodo to be sent in store via Reducer, so we use useDispatch() to dispatch the data(action).