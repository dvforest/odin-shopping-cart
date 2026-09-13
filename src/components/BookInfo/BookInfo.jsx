import styles from './BookInfo.module.css';
import Counter from '../Counter/Counter.jsx';

function BookInfo({ book }) {
  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.genre}>{book.genre}</h2>
      <div className={styles.binding}>{book.binding}</div>
      <p className={styles.description}>{book.description}</p>
      <div className={styles.price}>{'$' + book.price}</div>
      <Counter count={1} />
      <button className={styles.addButton}>Add to Cart</button>
    </div>
  );
}

export default BookInfo;
