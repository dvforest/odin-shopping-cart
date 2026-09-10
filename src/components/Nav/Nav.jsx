import { AdvancedImage } from '@cloudinary/react';
import cld from '../../utils/cloudinary';
import styles from './Nav.module.css';
import { ShoppingCart } from 'lucide-react';
import { NavLink } from 'react-router';

function Nav() {
  return (
    <div className={styles.navBar}>
      <NavLink
        to="/"
        end
        className={styles.logoSection}
      >
        <AdvancedImage
          cldImg={cld.image('logo-immersal')}
          className={styles.logoVector}
        />
        <div className={styles.logoText}>IMMERSAL</div>
      </NavLink>

      <div className={styles.linkSection}>
        <NavLink
          to="/"
          end
          className={styles.navText}
        >
          Home
        </NavLink>

        <NavLink
          to="/shop"
          className={styles.navText}
        >
          Shop
        </NavLink>

        <div className="cartContainer">
          <ShoppingCart size={30} />
        </div>
      </div>
    </div>
  );
}

export default Nav;
