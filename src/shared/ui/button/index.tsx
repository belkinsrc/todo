import styles from './styles.module.scss';

interface ButtonProps {
  children?: React.ReactNode;
  title?: string;
  disabled?: boolean;
  onClick?: () => void;
}

function Button({ children, title, disabled = false, onClick }: ButtonProps) {
  return (
    <button className={styles.button} title={title} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

export { Button };
