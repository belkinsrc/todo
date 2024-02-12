import { FaCheck } from 'react-icons/fa';
import styles from './styles.module.scss';

interface CompleteTodoProps {
  id: string;
  isCompleted: boolean;
  completeTodo: (id: string, isCompleted: boolean) => void;
}

const CompleteTodo: React.FC<CompleteTodoProps> = ({ id, isCompleted, completeTodo }) => {
  return <FaCheck className={styles.checkIcon} onClick={() => completeTodo(id, !isCompleted)} />;
};

export { CompleteTodo };
