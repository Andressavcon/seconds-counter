import styles from './counter.module.css';

interface CounterProps {
  children: number;
}

export function Counter({ children }: CounterProps): JSX.Element {
  const formattedChildren = String(children).padStart(3, '0');

  return (
    <div className={styles.value}>
      {formattedChildren.split('').map((digit, index) => (
        <span key={index} className={styles.value__digit}>
          {digit}
        </span>
      ))}
    </div>
  );
}
