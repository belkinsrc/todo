import { RiTodoFill } from 'react-icons/ri';
import { ITodo } from '@/shared/api';
import styles from './styles.module.scss';

interface TodoProps {
  todo: ITodo;
  DeleteIcon: React.ReactElement;
  CompleteIcon: React.ReactElement;
}

function Todo({ todo, DeleteIcon, CompleteIcon }: TodoProps) {
  const todoClassName = todo.isCompleted ? styles.todo + ' ' + styles.todoCompleted : styles.todo;

  return (
    <div className={todoClassName}>
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo.text}</div>
      {DeleteIcon}
      {CompleteIcon}
    </div>
  );
}

export { Todo };
