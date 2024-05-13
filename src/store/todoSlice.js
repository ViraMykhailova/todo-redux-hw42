import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const fetchTodos = createAsyncThunk(
    'todos/fetchTodos',
    async function (_,{rejectWithValue}) {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');

            if(!response.ok){
                throw new Error('Server error');
            }

            return await response.json();
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
const initialState = {
    todos: [],
    error: null,
    status: null,

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
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state) => {
            state.status = 'loading';
            state.error = null;
        })
            .addCase(fetchTodos.fulfilled, (state,action) => {
            state.status ='resolved';
            state.todos = action.payload;
        })
            .addCase(fetchTodos.rejected, (state,action) =>{
                state.status = 'rejected';
                state.error = action.payload;
            })
    }
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;