import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  return (
    <div className='main-wrapper'>
        <TodoInput />
        <TodoList />
    </div>
  );
}

export default App;
