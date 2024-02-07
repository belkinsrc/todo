import { RiTodoFill } from 'react-icons/ri';
import { ITodo } from '@/shared/api';
import styles from './styles.module.scss';

interface TodoProps {
  todo: ITodo;
  deleteTodo: (id: string) => void;
}

function Todo({ todo, deleteTodo }: TodoProps) {
  return (
    <div className={styles.todo} onDoubleClick={() => deleteTodo(todo.id)}>
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo.text}</div>
    </div>
  );
}

export { Todo };
