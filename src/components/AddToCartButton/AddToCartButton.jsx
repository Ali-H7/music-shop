import styles from './AddToCartButton.module.css';
import { Plus, Minus } from 'lucide-react';
import { useState, useEffect } from 'react';
import CartPopup from '../CartPopup/CartPopup';

function AddToCartButton({ albumId, cart, cartSetter }) {
  const [count, setCount] = useState(1);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isCartOpen ? 'hidden' : 'auto';
  }, [isCartOpen]);

  useEffect(() => {
    if (cart.length === 0 && isCartOpen) setIsCartOpen(false);
  }, [cart]);

  function handleCartPopUp() {
    setIsCartOpen((prev) => !prev);
  }

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
  }
  function inceraseCount() {
    setCount((prevCount) => prevCount + 1);
  }

  function handleAddToCart() {
    const doesExist = cart.some((item) => item.id === albumId);

    if (doesExist) {
      cartSetter((prev) =>
        prev.map((item) => {
          return item.id === albumId
            ? {
                ...item,
                quantity: count + item.quantity,
              }
            : item;
        }),
      );
    } else {
      cartSetter((prev) => [
        ...prev,
        {
          id: albumId,
          quantity: count,
        },
      ]);
    }
    handleCartPopUp();
  }

  return (
    <div className='add-to-cart'>
      <div className={styles.count}>
        <button className={styles.quantityBtn} onClick={decrementCount} disabled={count <= 1}>
          <Minus />
        </button>
        <p>{count}</p>
        <button className={styles.quantityBtn} onClick={inceraseCount}>
          <Plus />
        </button>
      </div>
      <button className={styles.cartButton} onClick={handleAddToCart}>
        Add to Cart
      </button>
      {isCartOpen && <CartPopup handleCartPopUp={handleCartPopUp} />}
      {isCartOpen && <div className={styles.overlay} onClick={handleCartPopUp}></div>}
    </div>
  );
}

export default AddToCartButton;
