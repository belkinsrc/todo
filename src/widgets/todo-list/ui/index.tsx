import { ITodo } from '@/shared/api';
import { Todo } from '@/entities/todo';
import { DeleteTodo } from '@/features/delete-todo';
import { CompleteTodo } from '@/features/complete-todo';
import styles from './styles.module.scss';

interface TodoListProps {
  todos: ITodo[];
  deleteTodo: (id: string) => void;
  completeTodo: (id: string, isCompleted: boolean) => void;
}

function TodoList({ todos, deleteTodo, completeTodo }: TodoListProps) {
  return (
    <div className={styles.todoList}>
      {todos.length > 0 ? (
        todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            DeleteIcon={<DeleteTodo id={todo.id} deleteTodo={deleteTodo} />}
            CompleteIcon={
              <CompleteTodo
                id={todo.id}
                isCompleted={todo.isCompleted}
                completeTodo={completeTodo}
              />
            }
          />
        ))
      ) : (
        <h2>Todo list is empty</h2>
      )}
    </div>
  );
}

export { TodoList };
