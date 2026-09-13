import styles from './Shop.module.css';
import BookInfo from '../../components/BookInfo/BookInfo';
import { books } from '../../data/books';

function Shop() {
  return (
    <div className={styles.shopContainer}>
      <BookInfo book={books[0]} />
    </div>
  );
}

export default Shop;
