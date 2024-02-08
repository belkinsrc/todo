import { RiDeleteBin2Line } from 'react-icons/ri';
import style from './styles.module.scss';

interface DeleteTodoProps {
  id: string;
  deleteTodo: (id: string) => void;
}

function DeleteTodo({ id, deleteTodo }: DeleteTodoProps) {
  return <RiDeleteBin2Line className={style.deleteIcon} onClick={() => deleteTodo(id)} />;
}

export { DeleteTodo };
