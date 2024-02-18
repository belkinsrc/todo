import { useContext } from 'react';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { TodoContext } from '@/app/context';
import styles from './styles.module.scss';

interface DeleteTodoProps {
  id: string;
}

const DeleteTodo: React.FC<DeleteTodoProps> = ({ id }) => {
  const { setTodos } = useContext(TodoContext);

  const deleteTodoHandler = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return <RiDeleteBin2Line className={styles.deleteIcon} onClick={deleteTodoHandler} />;
};

export { DeleteTodo };
