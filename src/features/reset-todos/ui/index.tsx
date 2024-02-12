import { RiRefreshLine } from 'react-icons/ri';
import { Button } from '@/shared/ui';

interface ResetTodosProps {
  resetTodos: () => void;
}

const ResetTodos: React.FC<ResetTodosProps> = ({ resetTodos }) => {
  return (
    <Button title="Reset Todos" onClick={resetTodos}>
      <RiRefreshLine />
    </Button>
  );
};

export { ResetTodos };
