import { FaCheck } from 'react-icons/fa';
import styles from './styles.module.scss';

interface CompleteTodoProps {
  id: string;
  isCompleted: boolean;
  completeTodo: (id: string, isCompleted: boolean) => void;
}

function CompleteTodo({ id, isCompleted, completeTodo }: CompleteTodoProps) {
  return <FaCheck className={styles.checkIcon} onClick={() => completeTodo(id, !isCompleted)} />;
}

export { CompleteTodo };
