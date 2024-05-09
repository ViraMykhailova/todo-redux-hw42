import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    todos: [
        {
            id: Math.random(),
            title: 'Doctor Appointment',
            completed: true
        },
        {
            id: Math.random(),
            title: 'Meeting with friends',
            completed: false
        }
    ]
};

const todoSlice = createSlice({
    name:'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Math.random(),
                title: action.payload,
                completed: false,
            };
            state.todos.push(newTodo);
        },
        toggleTodo: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
    },
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;