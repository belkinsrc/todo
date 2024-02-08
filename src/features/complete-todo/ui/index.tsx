import { FaCheck } from 'react-icons/fa';
import { Button } from '@/shared/ui';

interface CompleteTodoProps {
  id: string;
  isCompleted: boolean;
  completeTodo: (id: string, isCompleted: boolean) => void;
}

function CompleteTodo({ id, isCompleted, completeTodo }: CompleteTodoProps) {
  return <Button icon={<FaCheck />} onClick={() => completeTodo(id, !isCompleted)} />;
}

export { CompleteTodo };
