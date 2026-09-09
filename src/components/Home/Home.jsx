import cld from '../../utils/cloudinary';
import { AdvancedImage } from '@cloudinary/react';
import styles from './Home.module.css';

function Home() {
  const bg = cld.image('bg');
  const books = cld.image('home-books');

  return (
    <div className={styles.homeContainer}>
      <AdvancedImage
        cldImg={books}
        className={styles.booksImg}
      />
      <AdvancedImage
        cldImg={bg}
        className={styles.backgroundImg}
      />
    </div>
  );
}

export default Home;
