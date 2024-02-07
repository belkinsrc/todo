import { useState } from 'react';
import { generateId } from '@/shared/api';
import { ITodo } from '@/shared/api';
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

  return (
    <>
      <h1 className={styles.title}>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList todos={todos} deleteTodo={deleteTodoHandler} />
    </>
  );
}

export { TodoListPage };
