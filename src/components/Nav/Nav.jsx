import styles from './Nav.module.css';
import { ShoppingCart } from 'lucide-react';
import { Menu } from 'lucide-react';
import { NavLink } from 'react-router';
import ImmersalLogo from '../ImmersalLogo/ImmersalLogo';
import { useState } from 'react';
import NavModal from '../NavModal/NavModal';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import CartModal from '../CartModal/CartModal';

function Nav({ inCart, onAddCart, onRemoveCart }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const isMobile = useMediaQuery('(max-width: 768px)');

  const cartTotal = Object.values(inCart).reduce((sum, val) => sum + val, 0);

  return (
    <>
      <div
        className={`${styles.navBar} ${cartTotal > 0 ? styles.hasItems : ''}`}
      >
        <ImmersalLogo textVisible={isMobile ? false : true} />
        <ul className={styles.linkSection}>
          {!isMobile && (
            <>
              <li>
                <NavLink
                  to="/"
                  end
                  className={styles.navText}
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/shop"
                  className={styles.navText}
                >
                  Shop
                </NavLink>
              </li>
            </>
          )}

          <li>
            <button
              className={styles.cartContainer}
              onClick={() => setCartIsOpen(true)}
            >
              <ShoppingCart
                className={styles.cartIcon}
                size={25}
              />
              <div
                className={`${styles.cartTotal} ${cartTotal > 0 ? styles.hasItems : ''}`}
              >
                {cartTotal}
              </div>
            </button>
          </li>

          {isMobile && (
            <li>
              <button
                className={styles.menuIcon}
                onClick={() => setModalIsOpen(true)}
              >
                <Menu size={25} />
              </button>
            </li>
          )}
        </ul>
      </div>
      <NavModal
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
      />
      <CartModal
        isOpen={cartIsOpen}
        onClose={() => setCartIsOpen(false)}
        inCart={inCart}
        onAddCart={onAddCart}
        onRemoveCart={onRemoveCart}
      />
    </>
  );
}

export default Nav;
