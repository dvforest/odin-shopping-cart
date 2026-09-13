import styles from './BookSlide.module.css';
import { ArrowRight } from 'lucide-react';
import { ArrowLeft } from 'lucide-react';
import { AdvancedImage } from '@cloudinary/react';
import { books } from '../../data/books';

function BookSlide({ index, onPrev, onNext }) {
  return (
    <div className={styles.mainContainer}>
      <button
        className={styles.arrow}
        onClick={onPrev}
      >
        <ArrowLeft
          size={70}
          strokeWidth={3}
        />
      </button>

      <div className={styles.slide}>
        {books.map((book, i) => {
          return (
            <div
              key="book.id"
              className={`${styles.bookContainer} ${i === index ? styles.focused : ''}`}
            >
              <AdvancedImage
                cldImg={book.img}
                className={`${styles.book} ${i === index ? styles.focused : ''}`}
              />
              <div
                className={`${styles.shadow} ${i === index ? styles.focused : ''}`}
              />
            </div>
          );
        })}
      </div>

      <button
        className={styles.arrow}
        onClick={onNext}
      >
        <ArrowRight
          size={70}
          strokeWidth={3}
        />
      </button>
    </div>
  );
}

export default BookSlide;
