import styles from './NavModal.module.css';
import ImmersalLogo from '../ImmersalLogo/ImmersalLogo';
import { NavLink } from 'react-router';
import { X } from 'lucide-react';

function NavModal({ isOpen, onClose }) {
  return (
    <div className={styles.modalContainer}>
      <ul className={`${styles.modal} ${isOpen ? styles.modalVisible : ''}`}>
        <button onClick={onClose}>
          <li>
            <ImmersalLogo textVisible />
          </li>
        </button>

        <li>
          <button onClick={onClose}>
            <NavLink
              to="/"
              end
              className={styles.navText}
            >
              Home
            </NavLink>
          </button>
        </li>

        <li>
          <button onClick={onClose}>
            <NavLink
              to="/shop"
              className={styles.navText}
            >
              Shop
            </NavLink>
          </button>
        </li>
        <X
          className={`${styles.x} ${isOpen ? styles.xVisible : ''}`}
          onClick={onClose}
          size={45}
          strokeWidth={2}
        />
      </ul>

      <div className={`${styles.dark} ${isOpen ? styles.darkVisible : ''}`} />
    </div>
  );
}

export default NavModal;
