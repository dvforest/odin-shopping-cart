import styles from './CartModal.module.css';
import { X } from 'lucide-react';

function CartModal({ isOpen, onClose, inCart }) {
  const cartTotal = Object.values(inCart).reduce((sum, val) => sum + val, 0);

  return (
    <div className={styles.modalContainer}>
      <div className={`${styles.modal} ${isOpen ? styles.modalVisible : ''}`}>
        <h2 className={styles.header}>Shopping Cart</h2>
        <div className={styles.totalItems}>Contains {cartTotal} items.</div>
        <X
          className={`${styles.x} ${isOpen ? styles.xVisible : ''}`}
          onClick={onClose}
          size={30}
          strokeWidth={2}
        />
      </div>
      <div className={`${styles.dark} ${isOpen ? styles.darkVisible : ''}`} />
    </div>
  );
}

export default CartModal;
