import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addTodo} from '../store/todoSlice';

const TodoInput = () => {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(title.trim() !== '') {
            dispatch(addTodo(title));
            setTitle('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value = {title}
                onChange = {(e)=> setTitle(e.target.value)}
                placeholder ='Enter new task'
            />
            <button type='submit'>Add new task</button>
        </form>
    )
};

export default TodoInput;