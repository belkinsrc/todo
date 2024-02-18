import React, { useContext, useState } from 'react';
import { generateId } from '@/shared/api';
import { ITodo } from '@/shared/api';
import { Button } from '@/shared/ui';
import { TodoContext } from '@/app/context';
import styles from './styles.module.scss';

const TodoForm: React.FC = () => {
  const [todoText, setTodoText] = useState('');
  const { setTodos } = useContext(TodoContext);

  const addTodoHandler = (todoText: string) => {
    const todo: ITodo = {
      id: generateId(),
      text: todoText,
      isCompleted: false,
    };

    setTodos((prevTodos) => [...prevTodos, todo]);
  };

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (todoText.trim()) {
      addTodoHandler(todoText);
      setTodoText('');
    }
  };

  const onChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;

    setTodoText(target.value);
  };

  return (
    <form className={styles.form} action="#" onSubmit={onSubmitHandler}>
      <input
        className={styles.formInput}
        type="text"
        placeholder="Enter new todo"
        value={todoText}
        onChange={onChangeHandler}
      />
      <Button type="submit" title="Submit">
        Submit
      </Button>
    </form>
  );
};

export { TodoForm };
