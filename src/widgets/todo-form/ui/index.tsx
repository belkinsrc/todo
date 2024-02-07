import React, { useState } from 'react';
import styles from './styles.module.scss';

interface TodoFormProps {
  addTodo: (todo: string) => void;
}

function TodoForm({ addTodo }: TodoFormProps) {
  const [text, setText] = useState('');

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  const onChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;

    setText(target.value);
  };

  return (
    <form className={styles.form} action="#" onSubmit={onSubmitHandler}>
      <input
        className={styles.formInput}
        type="text"
        placeholder="Enter new todo"
        value={text}
        onChange={onChangeHandler}
      />
      <button className={styles.formButton} type="submit">
        Submit
      </button>
    </form>
  );
}

export { TodoForm };
