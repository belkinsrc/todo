import { RiTodoFill } from 'react-icons/ri';
import styles from './styles.module.scss';

interface TodoProps {
  todo: string;
  id: number;
  deleteTodo: (id: number) => void;
}

function Todo({ todo, id, deleteTodo }: TodoProps) {
  return (
    <div className={styles.todo} onDoubleClick={() => deleteTodo(id)}>
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo}</div>
    </div>
  );
}

export { Todo };
