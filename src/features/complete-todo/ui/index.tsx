import { useContext } from 'react';
import { FaCheck } from 'react-icons/fa';
import { TodoContext } from '@/app/context';
import styles from './styles.module.scss';

interface CompleteTodoProps {
  id: string;
  isCompleted: boolean;
}

const CompleteTodo: React.FC<CompleteTodoProps> = ({ id, isCompleted }) => {
  const { setTodos } = useContext(TodoContext);

  const completeTodoHandler = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return todo.id === id ? { ...todo, isCompleted: !isCompleted } : { ...todo };
      }),
    );
  };

  return <FaCheck className={styles.checkIcon} onClick={completeTodoHandler} />;
};

export { CompleteTodo };
