import { Plus } from 'lucide-react';
import { Minus } from 'lucide-react';
import styles from './Counter.module.css';

function Counter({ count }) {
  return (
    <div className={styles.container}>
      <div className={styles.minus}>
        <Minus />
      </div>
      <div className={styles.number}>{count}</div>
      <div className={styles.plus}>
        <Plus />
      </div>
    </div>
  );
}

export default Counter;
