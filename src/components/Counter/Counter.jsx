import { Plus } from 'lucide-react';
import { Minus } from 'lucide-react';
import styles from './Counter.module.css';

function Counter({ count, onPlus, onMinus }) {
  return (
    <div className={styles.container}>
      <button
        className={styles.minus}
        onClick={onMinus}
      >
        <Minus />
      </button>
      <div className={styles.number}>{count}</div>
      <button
        className={styles.plus}
        onClick={onPlus}
      >
        <Plus />
      </button>
    </div>
  );
}

export default Counter;
