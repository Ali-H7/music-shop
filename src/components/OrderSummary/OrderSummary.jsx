import styles from './OrderSummary.module.css';
import { useOutletContext } from 'react-router';
import { Link } from 'react-router';

function OrderSummary() {
  const { cart, albums, itemQuantity } = useOutletContext();

  const subTotal = cart
    .map((itemReference) => {
      const album = albums.find((item) => item.id === itemReference.id);
      return album.price * itemReference.quantity;
    })
    .reduce((a, b) => a + b, 0);
  const shipping = itemQuantity * 0.2;
  const vat = subTotal * 0.1;
  const total = subTotal + shipping + vat;

  return (
    <div className={styles.summaryContainer}>
      <h3 className={styles.title}>Order Summary</h3>
      <div className={styles.price}>
        <p>Subtotal:</p>
        <p>{`${subTotal.toFixed(3)} BHD`}</p>
      </div>
      <div className={styles.price}>
        <p>Shipping:</p>
        <p>{`${shipping.toFixed(3)} BHD`}</p>
      </div>
      <div className={styles.vat}>
        <p>VAT</p>
        <p>{`${vat.toFixed(3)} BHD`}</p>
      </div>
      <div className={styles.total}>
        <p>Total:</p>
        <p>{`${total.toFixed(3)} BHD`}</p>
      </div>
      <Link to='/cart'>
        <button className={styles.checkoutBtn}>Checkout</button>
      </Link>
      <div className={styles.continue}>
        <Link to='/shop/'>
          <p>Continue Shopping</p>
        </Link>
      </div>
    </div>
  );
}

export default OrderSummary;
