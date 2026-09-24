import styles from './BookInfo.module.css';
import Counter from '../Counter/Counter.jsx';

function BookInfo({ book, count, onPlus, onMinus, onAddCart }) {
  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.genre}>{book.genre}</h2>
      <div className={styles.binding}>{book.binding}</div>
      <p className={styles.description}>{book.description}</p>
      <div className={styles.priceAndCounterContainer}>
        <div className={styles.price}>{'$' + book.price}</div>
        <div className={styles.counter}>
          <Counter
            count={count}
            onPlus={onPlus}
            onMinus={onMinus}
          />
        </div>
      </div>
      <button
        className={styles.addButton}
        onClick={() => onAddCart(book.id, count)}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default BookInfo;
