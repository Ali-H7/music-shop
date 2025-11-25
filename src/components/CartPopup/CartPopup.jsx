import styles from './CartPopup.module.css';
import { useOutletContext } from 'react-router';
import PropTypes from 'prop-types';
import Quantity from '../Quantity/Quantity';
import { SquareX } from 'lucide-react';
import OrderSummary from '../OrderSummary/OrderSummary';

function CartPopup({ handleCartPopUp }) {
  const { albums, cart } = useOutletContext();
  return (
    <div className={`${styles.module} ${styles.slideRight}`}>
      <div className={styles.title}>
        <h3>Added to cart</h3>
        <button className={styles.closeBtn} onClick={handleCartPopUp}>
          <SquareX />
        </button>
      </div>

      <div className={styles.products}>
        {cart.map((itemRef) => {
          const { id } = itemRef;
          const album = albums.find((item) => item.id === id);
          return (
            <div key={album.id} className={styles.product}>
              <img className={styles.cover} src={album.image} alt='Album Cover' />
              <div className={styles.productInfo}>
                <p>{album.albumName}</p>
                <p className={styles.subText}>{`${album.price.toFixed(3)} BHD`}</p>
                <Quantity id={album.id} />
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.summary}>
        <OrderSummary />
      </div>
    </div>
  );
}

CartPopup.propTypes = {
  handleCartPopUp: PropTypes.func.isRequired,
};

export default CartPopup;
