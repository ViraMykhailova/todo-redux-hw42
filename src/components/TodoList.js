import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {toggleTodo,deleteTodo, fetchTodos} from '../store/todoSlice';

const TodoList = () => {
    const todos = useSelector(state => state.todos.todos);
    const error = useSelector(state => state.todos.error);
    const status = useSelector(state => state.todos.status);
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(fetchTodos());
    }, [dispatch]);

    const handleToggle = (id) => {
        dispatch(toggleTodo(id));
    }

    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    }

    return (
        <ul className='todo-list'>
            {status ==='loading' && <h2> Data is Loading... </h2>}
            {error && <h2>An error occurred : {error} </h2>}
            {todos?.map(todo => (
              <li className='todo-item' key={todo.id}>
                  <input
                      type='checkbox'
                      checked={todo.completed}
                      onChange={() =>handleToggle(todo.id)}
                  />
                  <span style={{textDecoration: todo.completed ? 'line-through': 'none'}}>{todo.title}</span>
                  <button onClick={() => handleDelete(todo.id)}>X</button>
              </li>
            ))}
        </ul>
    );
}
export default TodoList;