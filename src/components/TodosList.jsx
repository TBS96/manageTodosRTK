import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice'

const TodosList = () => {

  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  const [editId, setEditId] = useState(null)
  const [newTextValue, setNewTextValue] = useState('')

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const handleEditSave = (eachTodo) => {
    if (editId === eachTodo.id) {
      if (newTextValue.trim()) {
        dispatch(updateTodo({ id: editId, newTextValue }));
        setEditId(null);
        setNewTextValue('');
      }
    }
    else {
      setEditId(eachTodo.id)
      setNewTextValue(eachTodo.textValue)
    }
  }

  return (
    <>
      <ul>
        {todos.map((eachTodo) => (
          <li key={eachTodo.id} className='mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded-lg shadow-xl'>

            {editId === eachTodo.id ? (
              <input type="text" value={newTextValue} onChange={(e) => setNewTextValue(e.target.value)} className='text-black px-2 py-1 rounded-lg' placeholder='Edit & Save Changes...' />
            ) : (
              <div className='text-white'>{eachTodo.textValue}</div>
            )}

            <div className='flex space-x-2'>
              <button onClick={() => handleEditSave(eachTodo)} className={`text-white bg-blue-500 hover:bg-blue-600 py-1 px-3 rounded text-md ${editId === eachTodo.id ? "bg-green-500 hover:bg-green-600" : "bg-blue-500 hover:bg-blue-600"}`}>
                {editId === eachTodo.id ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M3.49 6.237A2.814 2.814 0 0 1 6.283 3.75h10.742a.75.75 0 0 1 .495.186l2.76 2.424c.621.545.964 1.34.934 2.165l-.344 9.574a2.75 2.75 0 0 1-2.748 2.651H6.113a2.64 2.64 0 0 1-2.621-2.307a48 48 0 0 1-.064-11.686zm2.794-.987c-.667 0-1.228.5-1.305 1.161l-.06.52a46.6 46.6 0 0 0 .06 11.322c.074.57.56.997 1.134.997h.637V15c0-.966.784-1.75 1.75-1.75h7c.966 0 1.75.784 1.75 1.75v4.25h.873a1.25 1.25 0 0 0 1.25-1.205l.343-9.573a1.25 1.25 0 0 0-.424-.985L16.75 5.255V7.6A1.75 1.75 0 0 1 15 9.35H9A1.75 1.75 0 0 1 7.25 7.6V5.25zm2.466 0V7.6c0 .138.112.25.25.25h6a.25.25 0 0 0 .25-.25V5.25zm7 14h-7.5V15a.25.25 0 0 1 .25-.25h7a.25.25 0 0 1 .25.25z" clip-rule="evenodd"/></svg>
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21.329 7.207c0-1.212-.472-2.352-1.329-3.207s-1.996-1.329-3.207-1.329a4.5 4.5 0 0 0-3.18 1.304c-.027.025-7.967 7.964-7.967 7.964c-.373.373-.717.91-.967 1.514c-.195.473-1.979 5.863-2.336 6.939a1 1 0 0 0 1.263 1.263c1.076-.355 6.465-2.141 6.938-2.336c.603-.248 1.14-.592 1.515-.967l2.157-2.156l.076.01c.64 0 1.28-.244 1.769-.732l4.5-4.5a2.49 2.49 0 0 0 .588-2.572c.107-.386.18-.783.18-1.195M9.465 17.586c-.406.143-1.145.393-2.038.691l-1.704-1.704c.301-.894.551-1.634.691-2.038zm-4.097.047l.999.999l-1.498.499zm7.698-3.113l-2.42 2.42l-.235.18l-3.53-3.529l.18-.234l7.131-7.131l2.731 2.731l-3.69 3.69c-.513.512-.549 1.289-.167 1.873m6.08-4.959l-4.5 4.5a.5.5 0 0 1-.708 0a.5.5 0 0 1 0-.707l4.5-4.5a.5.5 0 0 1 .707 0a.5.5 0 0 1 .001.707m.107-1.764a1.49 1.49 0 0 0-1.521.35l-.102.102l-2.731-2.731l.078-.078c.984-.98 2.652-.981 3.608-.023a2.52 2.52 0 0 1 .743 1.793c.001.199-.03.394-.075.587"/></svg>
                  </>
                )}
              </button>

              <button onClick={() => dispatch(removeTodo(eachTodo.id))} className='text-white bg-red-500 hover:bg-red-600 border-0 py-1 px-4 focus:outline-none rounded text-lg'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2h4a1 1 0 1 1 0 2h-1.069l-.867 12.142A2 2 0 0 1 17.069 22H6.93a2 2 0 0 1-1.995-1.858L4.07 8H3a1 1 0 0 1 0-2h4zm2 2h6V4H9zM6.074 8l.857 12H17.07l.857-12zM10 10a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1"/></svg>
              </button>
            </div>

          </li>
        ))}
      </ul>
    </>
  )
}

export default TodosList



// NOTES:
// we're using useSelector() here to get the current state of the todos array from the store.

// we're using useDispatch() here to dispatch actions(remove and update) to the store.