import { useEffect, useState } from 'react';
import { Button } from '../../components/Button';
import { Counter } from '../../components/Counter';
import styles from './app.module.css';

function App(): JSX.Element {
  const [seconds, setSeconds] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(true);

  useEffect(() => {
    let timer = 0;

    if (isRunning) {
      timer = setTimeout(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [seconds, isRunning]);

  const handlePause: () => void = () => {
    setIsRunning(false);
  };

  const handleContinue: () => void = () => {
    setIsRunning(true);
  };

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Seconds Counter</h1>
      <Counter>{seconds}</Counter>
      {isRunning ? (
        <Button onClick={handlePause}>Pause</Button>
      ) : (
        <Button onClick={handleContinue}>Continue</Button>
      )}
    </section>
  );
}

export default App;
