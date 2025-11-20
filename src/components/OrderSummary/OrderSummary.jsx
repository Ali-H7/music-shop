import styles from './OrderSummary.module.css';

function OrderSummary() {
  return (
    <div className={styles.summaryContainer}>
      <h3 className={styles.title}>Order Summary</h3>
      <div className={styles.price}>
        <p>Subtotal:</p>
        <p>1 BHD</p>
      </div>
      <div className={styles.price}>
        <p>Shipping:</p>
        <p>1 BHD</p>
      </div>
      <div className={styles.vat}>
        <p>VAT</p>
        <p>1 BHD</p>
      </div>
      <div className={styles.total}>
        <p>Total:</p>
        <p>1 BHD</p>
      </div>
      <button className={styles.checkoutBtn}>Checkout</button>
      <p className={styles.continue}>Continue Shopping</p>
    </div>
  );
}

export default OrderSummary;
