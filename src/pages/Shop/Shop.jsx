import styles from './Shop.module.css';
import BookInfo from '../../components/BookInfo/BookInfo';
import { books } from '../../data/books';
import BookSlide from '../../components/BookSlide/BookSlide';
import { useOutletContext } from 'react-router';

function Shop() {
  const {
    index,
    count,
    handlePrev,
    handleNext,
    handlePlus,
    handleMinus,
    handleAddCart,
  } = useOutletContext();

  return (
    <div className={styles.shopContainer}>
      <div className={styles.header}>
        <h2>
          <span className={styles.white}>Only the best of </span>fantasy books.
        </h2>
        <p className={styles.subHeader}>
          Pick a genre. We'll find the right gem for you.
        </p>
      </div>
      <div className={styles.mainContent}>
        <BookSlide
          index={index}
          onPrev={handlePrev}
          onNext={handleNext}
        />
        <BookInfo
          book={books[index]}
          count={count}
          onPlus={handlePlus}
          onMinus={handleMinus}
          onAddCart={handleAddCart}
        />
      </div>
    </div>
  );
}

export default Shop;
