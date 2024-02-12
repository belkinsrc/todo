import { RiDeleteBin2Line } from 'react-icons/ri';
import { Button } from '@/shared/ui';

interface ClearCompletedTodosProps {
  clearCompletedTodos: () => void;
  completedTodoExist: boolean;
}

const ClearCompletedTodos: React.FC<ClearCompletedTodosProps> = ({
  clearCompletedTodos,
  completedTodoExist,
}) => {
  return (
    <Button
      title="Clear Completed Todos"
      disabled={!completedTodoExist}
      onClick={clearCompletedTodos}
    >
      <RiDeleteBin2Line />
    </Button>
  );
};

export { ClearCompletedTodos };
