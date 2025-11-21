import styles from './Quantity.module.css';
import { Minus, Plus } from 'lucide-react';

function Quantity({ count }) {
  return (
    <div className='add-to-cart'>
      <div className={styles.count}>
        <Minus />
        <p>{count}</p>
        <Plus />
      </div>
    </div>
  );
}

export default Quantity;
