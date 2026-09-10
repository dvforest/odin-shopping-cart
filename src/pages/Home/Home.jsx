import cld from '../../utils/cloudinary';
import { AdvancedImage } from '@cloudinary/react';
import styles from './Home.module.css';

function Home() {
  const books = cld.image('home-books');

  return (
    <div className={styles.homeContainer}>
      <AdvancedImage
        cldImg={books}
        className={styles.booksImg}
      />
    </div>
  );
}

export default Home;
