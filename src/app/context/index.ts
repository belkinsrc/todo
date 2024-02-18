import { createContext } from 'react';
import { ITodo } from '@/shared/api';

interface TodoContextType {
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

export const TodoContext = createContext<TodoContextType>({
  todos: [],
  setTodos: () => {},
});
