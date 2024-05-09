import {useSelector, useDispatch} from 'react-redux';
import {toggleTodo,deleteTodo} from '../store/todoSlice';

const TodoList = () => {
    const todos = useSelector(state => state.todos.todos);
    const dispatch = useDispatch();

    const handleToggle = (id) => {
        dispatch(toggleTodo(id));
    }

    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    }

    return (
        <ul className='todo-list'>
            {todos.map(todo => (
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