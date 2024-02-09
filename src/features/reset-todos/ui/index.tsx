import { RiRefreshLine } from 'react-icons/ri';
import { Button } from '@/shared/ui';

interface ResetTodosProps {
  resetTodos: () => void;
}

function ResetTodos({ resetTodos }: ResetTodosProps) {
  return (
    <Button title="Reset Todos" onClick={resetTodos}>
      <RiRefreshLine />
    </Button>
  );
}

export { ResetTodos };
