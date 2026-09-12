import Nav from './components/Nav/Nav';
import { Outlet } from 'react-router';
import styles from './App.module.css';
import cld from './utils/cloudinary';

function App() {
  const bg = cld.image('bg');

  return (
    <div>
      <Nav />
      <div className={styles.main}>
        <Outlet />
        <div
          className={styles.backgroundImg}
          style={{ backgroundImage: `url(${bg.toURL()})` }}
        />
      </div>
    </div>
  );
}

export default App;
