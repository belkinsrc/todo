import './index.scss';
import { TodoList } from '@/widgets/todo-list';
import { TodoForm } from '@/widgets/todo-form';
import { TodoActions } from '@/widgets/todo-actions';

function App() {
  return (
    <>
      <h1>Todo App</h1>
      <TodoList />
      <TodoForm />
      <TodoActions />
    </>
  );
}

export default App;
