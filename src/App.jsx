import Nav from './components/Nav/Nav';
import { Outlet } from 'react-router';
import styles from './App.module.css';
import cld from './utils/cloudinary';
import { books } from './data/books.js';
import { useState, useEffect } from 'react';
import { preloadImages } from './utils/preloadImages.js';
import { LoaderCircle } from 'lucide-react';

function App() {
  const [index, setIndex] = useState(3);
  const [count, setCount] = useState(1);
  const [inCart, setInCart] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const images = books.map((book) => book.img);
    const bg = cld.image('bg');
    const home = cld.image('home-books');
    const logo = cld.image('logo-immersal');
    images.push(bg, home, logo);
    preloadImages(images).then(() => {
      setIsLoading(false);
    });
  }, []);

  function handlePrev() {
    setIndex((prev) => (prev - 1 > 0 ? prev - 1 : 0));
  }

  function handleNext() {
    setIndex((prev) => (prev + 1 < books.length ? prev + 1 : prev));
  }

  function handlePlus() {
    setCount((prev) => prev + 1);
  }

  function handleMinus() {
    setCount((prev) => (prev - 1 > 0 ? prev - 1 : 1));
  }

  function handleAddCart(id, count) {
    setInCart((prev) => ({
      ...prev,
      [id]: Math.min(99, (prev[id] || 0) + count),
    }));
  }

  function handleRemoveCart(id, count) {
    const currentCount = inCart[id];
    const newCount = currentCount - count;

    if (newCount <= 0) {
      setInCart((prev) => {
        const { [id]: _, ...idRemoved } = prev;
        return idRemoved;
      });
    } else {
      handleAddCart(id, -count);
    }
  }

  if (isLoading) {
    return (
      <div className={styles.loadingMain}>
        <div className={styles.loadingContainer}>
          <LoaderCircle className={styles.loadingAnimation} />
          <div className={styles.loadingText}>Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Nav
        inCart={inCart}
        onAddCart={handleAddCart}
        onRemoveCart={handleRemoveCart}
      />
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
          style={{ '--bg-url': `url(${cld.image('bg').toURL()})` }}
        />
      </div>
    </div>
  );
}

export default App;
