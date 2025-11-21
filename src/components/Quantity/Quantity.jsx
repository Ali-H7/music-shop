import styles from './Quantity.module.css';
import { Minus, Plus } from 'lucide-react';
import { useOutletContext } from 'react-router';

function Quantity({ id }) {
  const { cart, setCart } = useOutletContext();
  const album = cart.find((item) => item.id === id);

  function increaseQuantity() {
    setCart((prev) => prev.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)));
  }

  function decreaseQuantity() {
    setCart((prev) =>
      prev
        .filter((item) => {
          if (item.id === id) return item.quantity !== 1;
          return true;
        })
        .map((item) => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item)),
    );
  }
  return (
    <div className='add-to-cart'>
      <div className={styles.count}>
        <button className={styles.button} onClick={decreaseQuantity}>
          <Minus />
        </button>
        <p>{album.quantity}</p>
        <button className={styles.button} onClick={increaseQuantity}>
          <Plus />
        </button>
      </div>
    </div>
  );
}

export default Quantity;
