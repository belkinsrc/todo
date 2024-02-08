import { RiTodoFill } from 'react-icons/ri';
import { ITodo } from '@/shared/api';
import styles from './styles.module.scss';

interface TodoProps {
  todo: ITodo;
  DeleteIcon: React.ReactElement;
  CompleteIcon: React.ReactElement;
}

function Todo({ todo, DeleteIcon, CompleteIcon }: TodoProps) {
  return (
    <div className={`${styles.todo} ${todo.isCompleted ? styles.todoCompleted : ''}`}>
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo.text}</div>
      {DeleteIcon}
      {CompleteIcon}
    </div>
  );
}

export { Todo };
