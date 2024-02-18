import { useContext } from 'react';
import { Todo } from '@/entities/todo';
import { DeleteTodo } from '@/features/delete-todo';
import { CompleteTodo } from '@/features/complete-todo';
import { TodoContext } from '@/app/context';
import styles from './styles.module.scss';

const TodoList: React.FC = () => {
  const { todos } = useContext(TodoContext);

  return (
    <div className={styles.todoList}>
      {todos.length > 0 ? (
        todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            DeleteIcon={<DeleteTodo id={todo.id} />}
            CompleteIcon={<CompleteTodo id={todo.id} isCompleted={todo.isCompleted} />}
          />
        ))
      ) : (
        <h2>Todo list is empty</h2>
      )}
    </div>
  );
};

export { TodoList };
