import { ResetTodos } from '@/features/reset-todos';
import { ClearCompletedTodos } from '@/features/clear-completed-todos/ui';
import { useContext } from 'react';
import { TodoList } from '@/widgets/todo-list';
import { TodoForm } from '@/widgets/todo-form';
import { TodoContext } from '@/app/context';
import styles from './styles.module.scss';

const TodoListPage: React.FC = () => {
  const { todos } = useContext(TodoContext);

  const completeTodosCount = todos.filter((todo) => todo.isCompleted).length;

  return (
    <>
      <h1 className={styles.title}>Todo App</h1>
      <TodoForm />
      {!!todos.length && <ResetTodos />}
      {!!todos.length && <ClearCompletedTodos completedTodoExist={!!completeTodosCount} />}
      <TodoList />
      {completeTodosCount > 0 && (
        <h2>{`You have completed ${completeTodosCount} ${completeTodosCount > 1 ? 'todos' : 'todo'}`}</h2>
      )}
    </>
  );
};

export default TodoListPage;
