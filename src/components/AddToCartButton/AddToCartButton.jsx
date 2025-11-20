import styles from './AddToCartButton.module.css';
import { Plus, Minus } from 'lucide-react';

function AddToCartButton() {
  return (
    <div className='add-to-cart'>
      <div className={styles.count}>
        <Minus />
        <p>0</p>
        <Plus />
      </div>
      <button className={styles.cartButton}>Add to Cart</button>
    </div>
  );
}

export default AddToCartButton;
