import { RiTodoFill } from 'react-icons/ri';
import { ITodo } from '@/shared/api';
import styles from './styles.module.scss';

interface TodoProps {
  todo: ITodo;
  DeleteIcon: React.ReactElement;
  CompleteIcon: React.ReactElement;
}

const Todo: React.FC<TodoProps> = ({ todo, DeleteIcon, CompleteIcon }) => {
  return (
    <div className={`${styles.todo} ${todo.isCompleted ? styles.todoCompleted : ''}`}>
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo.text}</div>
      {DeleteIcon}
      {CompleteIcon}
    </div>
  );
};

export { Todo };
