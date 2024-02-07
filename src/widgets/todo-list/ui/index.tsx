import { Todo } from '@/entities/todo';
import styles from './styles.module.scss';

interface TodoListProps {
  todos: string[];
  deleteTodo: (id: number) => void;
}

function TodoList({ todos, deleteTodo }: TodoListProps) {
  return (
    <div className={styles.todoList}>
      {todos.length > 0 ? (
        todos.map((todo, index) => (
          <Todo key={index} todo={todo} id={index} deleteTodo={deleteTodo} />
        ))
      ) : (
        <h2>Todo list is empty</h2>
      )}
    </div>
  );
}

export { TodoList };
