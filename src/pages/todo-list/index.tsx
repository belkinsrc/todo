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

  const completeTodoHandler = (id: string, status: boolean) => {
    function updateTodoStatus(todos: ITodo[], idToUpdate: string, status: boolean) {
      const updateTodos = [...todos];

      const indexToUpdate = updateTodos.findIndex((todo) => todo.id === idToUpdate);

      if (indexToUpdate !== -1) {
        updateTodos[indexToUpdate] = {
          ...updateTodos[indexToUpdate],
          isCompleted: status,
        };
      }
      return updateTodos;
    }
    setTodos(updateTodoStatus(todos, id, status));
  };

  return (
    <>
      <h1 className={styles.title}>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList todos={todos} deleteTodo={deleteTodoHandler} completeTodo={completeTodoHandler} />
    </>
  );
}

export { TodoListPage };
