import { RiDeleteBin2Line } from 'react-icons/ri';
import styles from './styles.module.scss';

interface DeleteTodoProps {
  id: string;
  deleteTodo: (id: string) => void;
}

function DeleteTodo({ id, deleteTodo }: DeleteTodoProps) {
  return <RiDeleteBin2Line className={styles.deleteIcon} onClick={() => deleteTodo(id)} />;
}

export { DeleteTodo };
