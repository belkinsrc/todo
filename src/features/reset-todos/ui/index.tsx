import { useContext } from 'react';
import { RiRefreshLine } from 'react-icons/ri';
import { Button } from '@/shared/ui';
import { TodoContext } from '@/app/context';

const ResetTodos: React.FC = () => {
  const { setTodos } = useContext(TodoContext);

  return (
    <Button title="Reset Todos" onClick={() => setTodos([])}>
      <RiRefreshLine />
    </Button>
  );
};

export { ResetTodos };
