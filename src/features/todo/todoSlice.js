import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    todos: [
        {
            id: 1,
            textValue: 'Hello RTK'
        }
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
            state.todos = state.todos.filter((eachTodo) => eachTodo.id !== action.payload)
        },
    }
})

export const { addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer