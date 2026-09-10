import Nav from './components/Nav/Nav';
import { Outlet } from 'react-router';
import { AdvancedImage } from '@cloudinary/react';
import styles from './App.module.css';
import cld from './utils/cloudinary';

function App() {
  const bg = cld.image('bg');

  return (
    <div>
      <Nav />
      <div className={styles.main}>
        <Outlet />
        <AdvancedImage
          cldImg={bg}
          className={styles.backgroundImg}
        />
      </div>
    </div>
  );
}

export default App;
