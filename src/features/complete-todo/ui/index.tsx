import { FaCheck } from 'react-icons/fa';
import style from './styles.module.scss';

interface CompleteTodoProps {
  id: string;
  isCompleted: boolean;
  completeTodo: (id: string, isCompleted: boolean) => void;
}

function CompleteTodo({ id, isCompleted, completeTodo }: CompleteTodoProps) {
  return <FaCheck className={style.checkIcon} onClick={() => completeTodo(id, !isCompleted)} />;
}

export { CompleteTodo };
