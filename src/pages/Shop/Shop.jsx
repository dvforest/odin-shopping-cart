import styles from './Shop.module.css';
import BookInfo from '../../components/BookInfo/BookInfo';
import { books } from '../../data/books';
import BookSlide from '../../components/BookSlide/BookSlide';
import { useOutletContext } from 'react-router';

function Shop() {
  const { index, count, handlePrev, handleNext, handlePlus, handleMinus } =
    useOutletContext();

  return (
    <div className={styles.shopContainer}>
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
      />
    </div>
  );
}

export default Shop;
