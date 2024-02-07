import { useState } from 'react';
import { TodoList } from '@/widgets/todo-list';
import { TodoForm } from '@/widgets/todo-form';
import styles from './styles.module.scss';

function TodoListPage() {
  const [todos, setTodos] = useState<string[]>([]);

  const addTodoHandler = (todo: string) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
  };

  const deleteTodoHandler = (id: number) => {
    setTodos((prevTodos) => [...prevTodos.slice(0, id), ...prevTodos.slice(id + 1)]);
  };

  return (
    <>
      <h1 className={styles.title}>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList todos={todos} deleteTodo={deleteTodoHandler} />
    </>
  );
}

export { TodoListPage };
