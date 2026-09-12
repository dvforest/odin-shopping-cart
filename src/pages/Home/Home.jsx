import cld from '../../utils/cloudinary';
import { AdvancedImage } from '@cloudinary/react';
import styles from './Home.module.css';
import { NavLink } from 'react-router';

function Home() {
  const books = cld.image('home-books');

  return (
    <div className={styles.homeContainer}>
      <AdvancedImage
        cldImg={books}
        className={styles.booksImg}
      />
      <div className={styles.textSection}>
        <h2>OCEANS OF BOOKS.</h2>
        <h1>ENDLESS WONDER.</h1>
        <p>
          You know what kind of books you like. So why does finding your next
          read feels like a daunting quest? <br />
          At Immersal, we're here to re-kindle the spark.
        </p>
        <NavLink
          to="/shop"
          className={styles.ShopNowButton}
        >
          Shop Now
        </NavLink>
      </div>
    </div>
  );
}

export default Home;
