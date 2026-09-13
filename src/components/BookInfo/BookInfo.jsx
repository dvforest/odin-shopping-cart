import styles from './BookInfo.module.css';
import Counter from '../Counter/Counter.jsx';

function BookInfo({ book, count, onPlus, onMinus }) {
  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.genre}>{book.genre}</h2>
      <div className={styles.binding}>{book.binding}</div>
      <p className={styles.description}>{book.description}</p>
      <div className={styles.price}>{'$' + book.price}</div>
      <Counter
        count={count}
        onPlus={onPlus}
        onMinus={onMinus}
      />
      <button className={styles.addButton}>Add to Cart</button>
    </div>
  );
}

export default BookInfo;
