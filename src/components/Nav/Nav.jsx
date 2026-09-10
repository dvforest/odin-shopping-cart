import { AdvancedImage } from '@cloudinary/react';
import cld from '../../utils/cloudinary';
import styles from './Nav.module.css';
import { ShoppingCart } from 'lucide-react';

function Nav() {
  return (
    <div className={styles.navBar}>
      <div className={styles.logoSection}>
        <AdvancedImage
          cldImg={cld.image('logo-immersal')}
          className={styles.logoVector}
        />
        <div className={styles.logoText}>IMMERSAL</div>
      </div>
      <div className={styles.linkSection}>
        <div className={styles.navText}>Home</div>
        <div className={styles.navText}>Shop</div>
        <div className="cartContainer">
          <ShoppingCart size={30} />
        </div>
      </div>
    </div>
  );
}

export default Nav;
