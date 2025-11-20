import styles from './Quantity.module.css';
import { Minus, Plus } from 'lucide-react';

function Quantity() {
  return (
    <div className='add-to-cart'>
      <div className={styles.count}>
        <Minus />
        <p>0</p>
        <Plus />
      </div>
    </div>
  );
}

export default Quantity;
