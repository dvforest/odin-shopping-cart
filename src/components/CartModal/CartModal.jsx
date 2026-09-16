import styles from './CartModal.module.css';
import { X } from 'lucide-react';
import { Trash } from 'lucide-react';
import cld from '../../utils/cloudinary';
import { AdvancedImage } from '@cloudinary/react';
import Counter from '../Counter/Counter.jsx';
import { books } from '../../data/books.js';

function CartModal({ isOpen, onClose, inCart, onAddCart, onRemoveCart }) {
  const cartTotal = Object.values(inCart).reduce((sum, val) => sum + val, 0);
  return (
    <div className={styles.modalContainer}>
      <div className={`${styles.modal} ${isOpen ? styles.modalVisible : ''}`}>
        <h2 className={styles.header}>Your Cart</h2>
        <div className={styles.totalItems}>
          {cartTotal} item{cartTotal > 1 && 's'} in your cart.
        </div>
        <X
          className={`${styles.x} ${isOpen ? styles.xVisible : ''}`}
          onClick={onClose}
          size={30}
          strokeWidth={2}
        />
        {Object.entries(inCart).map(([id, count]) => {
          const i = books.findIndex((book) => book.id === id);
          return (
            <div
              className={styles.itemContainer}
              key={id}
            >
              <div className={styles.iconSection}>
                <AdvancedImage
                  cldImg={cld.image('book-icon')}
                  className={styles.bookIcon}
                />
                <div className={styles.titleContainer}>
                  <div className={styles.keyText}>{books[i].genre} Novel</div>
                  <div className={styles.subText}>{books[i].binding}</div>
                </div>
              </div>
              <div className={styles.countSection}>
                <div className={styles.counterWrapper}>
                  <Counter
                    count={count}
                    onPlus={() => onAddCart(id, 1)}
                    onMinus={() => onRemoveCart(id, 1)}
                  />
                </div>
                <div className={styles.row}>
                  <div className={styles.price}>$ {books[i].price}</div>
                  <button
                    className={styles.trashIcon}
                    onClick={() => onRemoveCart(id, 99)}
                  >
                    <Trash />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={`${styles.dark} ${isOpen ? styles.darkVisible : ''}`} />
    </div>
  );
}

export default CartModal;
