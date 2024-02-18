import { useContext } from 'react';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { Button } from '@/shared/ui';
import { TodoContext } from '@/app/context';

interface ClearCompletedTodosProps {
  completedTodoExist: boolean;
}

const ClearCompletedTodos: React.FC<ClearCompletedTodosProps> = ({ completedTodoExist }) => {
  const { todos, setTodos } = useContext(TodoContext);

  function clearCompletedTodosHandler() {
    // setTodos((prevTodos) => prevTodos.filter((todos) => !todos.isCompleted));
    setTodos(todos.filter((todos) => !todos.isCompleted));
  }

  return (
    <Button
      title="Clear Completed Todos"
      disabled={!completedTodoExist}
      onClick={() => clearCompletedTodosHandler()}
    >
      <RiDeleteBin2Line />
    </Button>
  );
};

export { ClearCompletedTodos };
