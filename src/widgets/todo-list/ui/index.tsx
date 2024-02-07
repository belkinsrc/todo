import { ITodo } from '@/shared/api';
import { Todo } from '@/entities/todo';
import styles from './styles.module.scss';

interface TodoListProps {
  todos: ITodo[];
  deleteTodo: (id: string) => void;
}

function TodoList({ todos, deleteTodo }: TodoListProps) {
  return (
    <div className={styles.todoList}>
      {todos.length > 0 ? (
        todos.map((todo) => (
          <Todo key={todo.id} text={todo.text} id={todo.id} deleteTodo={deleteTodo} />
        ))
      ) : (
        <h2>Todo list is empty</h2>
      )}
    </div>
  );
}

export { TodoList };
