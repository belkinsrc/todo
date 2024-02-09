import { RiDeleteBin2Line } from 'react-icons/ri';
import { Button } from '@/shared/ui';

interface ClearCompletedTodosProps {
  clearCompletedTodos: () => void;
  checkCompletedTodos: () => boolean;
}

function ClearCompletedTodos({
  clearCompletedTodos,
  checkCompletedTodos,
}: ClearCompletedTodosProps) {
  return (
    <Button
      title="Clear Completed Todos"
      disabled={!checkCompletedTodos()}
      onClick={clearCompletedTodos}
    >
      <RiDeleteBin2Line />
    </Button>
  );
}

export { ClearCompletedTodos };
