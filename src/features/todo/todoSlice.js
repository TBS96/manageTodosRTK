import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    todos: JSON.parse(localStorage.getItem('todos')) || [
        // {
        //     id: 1,
        //     textValue: 'Hello RTK'
        // }
    ]
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const eachTodo = {
                id: nanoid(),
                textValue: action.payload
            }
            state.todos.push(eachTodo)
        },
        removeTodo: (state, action) => {
            const userResponse = prompt(`Are you sure you want to delete this task? (Type 'Y' or 'y' or hit Cancel)`)
            if (userResponse === '' || userResponse !== 'Y' || userResponse === 'y') {
                alert('Task deletion cancelled.')
            }
            else if (userResponse === 'Y' || userResponse === 'y') {
                state.todos = state.todos.filter((eachTodo) => eachTodo.id !== action.payload);
            }
        },
        updateTodo: (state, action) => {
            const {id, newTextValue} = action.payload // extract the id and newTextValue from action.payload

            const eachTodo = state.todos.find((eachTodo) => eachTodo.id === id) // find the specific todo by id

            if (eachTodo) {
                eachTodo.textValue = newTextValue
            } // if the eachTodo is found, update its textValue
        }
    }
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions

export default todoSlice.reducer


// NOTES:
// redux-toolkit is slightly different from redux. in RTK we call reducers as slices(features), thats why for naming convention, we renamed this file as todoSlice.js

// slice is the bigger version of a reducer(functionality), it groups related actions and reducers together.

// reducers are pure functions having properties(addTodo, removeTodo) and a callback function(state, action) with state and action as parameters.

// rtk differs from contextAPI in that, in contextAPI we were just declaring fns. and not writing definitions, whereas in RTK, we are actually defining functions(slices).

// state parameter gives access to the current state of the slice, here 'todos'.

// action is the object that gets dispatched to the store(to get the updated state). Basically data is being passed to action.

// don't want to show anything when loaded for the first time, thus we set the initial state to an empty array.