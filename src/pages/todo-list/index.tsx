import { useState } from 'react';
import { generateId } from '@/shared/api';
import { ITodo } from '@/shared/api';
import { ResetTodos } from '@/features/reset-todos';
import { ClearCompletedTodos } from '@/features/clear-completed-todos/ui';
import { TodoList } from '@/widgets/todo-list';
import { TodoForm } from '@/widgets/todo-form';
import styles from './styles.module.scss';

function TodoListPage() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const todo: ITodo = {
      id: generateId(),
      text: todoText,
      isCompleted: false,
    };

    setTodos((prevTodos) => [...prevTodos, todo]);
  };

  const deleteTodoHandler = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const completeTodoHandler = (id: string, status: boolean) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return todo.id === id ? { ...todo, isCompleted: status } : { ...todo };
      }),
    );
  };

  const resetTodosHandler = () => {
    setTodos([]);
  };

  const clearCompletedTodosHandler = () => {
    setTodos((prevTodos) => prevTodos.filter((todos) => !todos.isCompleted));
  };

  const checkCompletedTodos = (): boolean => {
    return todos.find((todo) => todo.isCompleted) ? true : false;
  };

  return (
    <>
      <h1 className={styles.title}>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      {!!todos.length && <ResetTodos resetTodos={resetTodosHandler} />}
      {!!todos.length && (
        <ClearCompletedTodos
          clearCompletedTodos={clearCompletedTodosHandler}
          checkCompletedTodos={checkCompletedTodos}
        />
      )}
      <TodoList todos={todos} deleteTodo={deleteTodoHandler} completeTodo={completeTodoHandler} />
    </>
  );
}

export { TodoListPage };
