import { RiDeleteBin2Line } from 'react-icons/ri';
import { Button } from '@/shared/ui';

interface ClearCompletedTodosProps {
  clearCompletedTodos: () => void;
  completedTodoExist: boolean;
}

function ClearCompletedTodos({
  clearCompletedTodos,
  completedTodoExist,
}: ClearCompletedTodosProps) {
  return (
    <Button
      title="Clear Completed Todos"
      disabled={!completedTodoExist}
      onClick={clearCompletedTodos}
    >
      <RiDeleteBin2Line />
    </Button>
  );
}

export { ClearCompletedTodos };
