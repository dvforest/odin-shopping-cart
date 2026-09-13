import styles from './Shop.module.css';
import BookInfo from '../../components/BookInfo/BookInfo';
import { books } from '../../data/books';
import { useState } from 'react';
import BookSlide from '../../components/BookSlide/BookSlide';

function Shop() {
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(1);
  return (
    <div className={styles.shopContainer}>
      <BookSlide
        index={index}
        onPrev={() => setIndex((prev) => (prev - 1 > 0 ? prev - 1 : 0))}
        onNext={() =>
          setIndex((prev) => (prev + 1 < books.length ? prev + 1 : prev))
        }
      />
      <BookInfo
        book={books[index]}
        count={count}
        onPlus={() => setCount((prev) => prev + 1)}
        onMinus={() => setCount((prev) => (prev - 1 > 0 ? prev - 1 : 1))}
      />
    </div>
  );
}

export default Shop;
