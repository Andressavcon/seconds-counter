import styles from './button.module.css';

interface ButtonProps {
  children: string;
  onClick?: () => void;
}

export function Button({ children, onClick }: ButtonProps): JSX.Element {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}
