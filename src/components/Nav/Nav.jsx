import styles from './Nav.module.css';
import { ShoppingCart } from 'lucide-react';
import { Menu } from 'lucide-react';
import { NavLink } from 'react-router';
import ImmersalLogo from '../ImmersalLogo/ImmersalLogo';
import { useState } from 'react';
import NavModal from '../NavModal/NavModal';
import { useMediaQuery } from '../../hooks/useMediaQuery';

function Nav() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <>
      <div className={styles.navBar}>
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
            <div className={styles.cartContainer}>
              <ShoppingCart
                className={styles.cartIcon}
                size={25}
              />
            </div>
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
    </>
  );
}

export default Nav;
