import styles from './styles.module.scss';

interface ButtonProps {
  children?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  title?: string;
  disabled?: boolean;
  onClick?: () => void;
}

function Button({ children, type = 'button', title, disabled = false, onClick }: ButtonProps) {
  return (
    <button
      className={styles.button}
      type={type}
      title={title}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export { Button };
