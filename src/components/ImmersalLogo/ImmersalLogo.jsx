import styles from './ImmersalLogo.module.css';
import { AdvancedImage } from '@cloudinary/react';
import { NavLink } from 'react-router';
import cld from '../../utils/cloudinary';

function ImmersalLogo({ textVisible }) {
  return (
    <NavLink
      to="/"
      end
      className={styles.logoSection}
    >
      <AdvancedImage
        cldImg={cld.image('logo-immersal')}
        className={styles.logoVector}
      />
      {textVisible && <div className={styles.logoText}>IMMERSAL</div>}
    </NavLink>
  );
}

export default ImmersalLogo;
