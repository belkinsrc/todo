import React, { useState } from 'react';
import { Button } from '@/shared/ui';
import styles from './styles.module.scss';

interface TodoFormProps {
  addTodo: (todoText: string) => void;
}

function TodoForm({ addTodo }: TodoFormProps) {
  const [todoText, setTodoText] = useState('');

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (todoText.trim()) {
      addTodo(todoText);
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
}

export { TodoForm };
