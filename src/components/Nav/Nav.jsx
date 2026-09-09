import { AdvancedImage } from '@cloudinary/react';
import cld from '../../utils/cloudinary';
import styles from './Nav.module.css';

function Nav() {
  return (
    <div className={styles.navBar}>
      <div className={styles.logoContainer}>
        <AdvancedImage
          cldImg={cld.image('logo-immersal')}
          className={styles.logoVector}
        />
        <div className={styles.logoText}>IMMERSAL</div>
      </div>
    </div>
  );
}

export default Nav;
