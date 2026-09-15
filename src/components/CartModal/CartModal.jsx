import styles from './CartModal.module.css';
import { X } from 'lucide-react';

function CartModal({ isOpen, onClose }) {
  return (
    <div className={styles.modalContainer}>
      <ul className={`${styles.modal} ${isOpen ? styles.modalVisible : ''}`}>
        Some content
        <X
          className={`${styles.x} ${isOpen ? styles.xVisible : ''}`}
          onClick={onClose}
          size={30}
          strokeWidth={2}
        />
      </ul>
      <div className={`${styles.dark} ${isOpen ? styles.darkVisible : ''}`} />
    </div>
  );
}

export default CartModal;
