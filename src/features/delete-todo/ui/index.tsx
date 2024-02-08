import { RiDeleteBin2Line } from 'react-icons/ri';
import { Button } from '@/shared/ui';

interface DeleteTodoProps {
  id: string;
  deleteTodo: (id: string) => void;
}

function DeleteTodo({ id, deleteTodo }: DeleteTodoProps) {
  return <Button icon={<RiDeleteBin2Line />} onClick={() => deleteTodo(id)} />;
}

export { DeleteTodo };
