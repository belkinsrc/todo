import { RiTodoFill } from 'react-icons/ri';
import styles from './styles.module.scss';

interface TodoProps {
  text: string;
  id: string;
  deleteTodo: (id: string) => void;
}

function Todo({ text, id, deleteTodo }: TodoProps) {
  return (
    <div className={styles.todo} onDoubleClick={() => deleteTodo(id)}>
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{text}</div>
    </div>
  );
}

export { Todo };
