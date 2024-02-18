import { useState } from 'react';
import { ITodo } from '@/shared/api';
import { TodoContext } from '../context';

const withContext = (component: () => React.ReactNode) => () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  return <TodoContext.Provider value={{ todos, setTodos }}>{component()}</TodoContext.Provider>;
};

export { withContext };
