import Nav from './components/Nav/Nav';
import { Outlet } from 'react-router';
import styles from './App.module.css';
import cld from './utils/cloudinary';
import { useState } from 'react';

function App() {
  const [index, setIndex] = useState(3);
  const [count, setCount] = useState(1);

  const bg = cld.image('bg');

  function handlePrev() {
    setIndex((prev) => (prev - 1 > 0 ? prev - 1 : 0));
  }

  function handleNext() {
    setIndex((prev) => (prev - 1 > 0 ? prev - 1 : 0));
  }

  function handlePlus() {
    setCount((prev) => prev + 1);
  }

  function handleMinus() {
    setCount((prev) => (prev - 1 > 0 ? prev - 1 : 1));
  }

  return (
    <div>
      <Nav />
      <div className={styles.main}>
        <Outlet
          context={{
            index,
            count,
            handlePrev,
            handleNext,
            handlePlus,
            handleMinus,
          }}
        />
        <div
          className={styles.backgroundImg}
          style={{ backgroundImage: `url(${bg.toURL()})` }}
        />
      </div>
    </div>
  );
}

export default App;
