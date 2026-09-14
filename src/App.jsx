import Nav from './components/Nav/Nav';
import { Outlet } from 'react-router';
import styles from './App.module.css';
import cld from './utils/cloudinary';
import { books } from './data/books.js';
import { useState } from 'react';

function App() {
  const [index, setIndex] = useState(3);
  const [count, setCount] = useState(1);
  const [inCart, setInCart] = useState({});

  const bg = cld.image('bg');

  const cartTotal = Object.values(inCart).reduce((sum, val) => sum + val, 0);

  function handlePrev() {
    setIndex((prev) => (prev - 1 > 0 ? prev - 1 : 0));
  }

  function handleNext() {
    setIndex((prev) => (prev - 1 < books.length ? prev + 1 : 0));
  }

  function handlePlus() {
    setCount((prev) => prev + 1);
  }

  function handleMinus() {
    setCount((prev) => (prev - 1 > 0 ? prev - 1 : 1));
  }

  function handleAddCart(id, count) {
    console.log(`added ${id} x ${count}`);
    setInCart((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + count,
    }));
  }

  return (
    <div>
      <Nav cartTotal={cartTotal} />
      <div className={styles.main}>
        <Outlet
          context={{
            index,
            count,
            handlePrev,
            handleNext,
            handlePlus,
            handleMinus,
            handleAddCart,
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
