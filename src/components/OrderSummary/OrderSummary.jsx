import styles from './OrderSummary.module.css';

function OrderSummary() {
  return (
    <div className={styles.summaryContainer}>
      <h6>Order Summary</h6>
      <div>
        <p>Subtotal:</p>
        <p>1 BHD</p>
      </div>
      <div>
        <p>Shipping:</p>
        <p>1 BHD</p>
      </div>
      <div>
        <p>VAT</p>
        <p>1 BHD</p>
      </div>
      <div>
        <p>Total:</p>
        <p>1 BHD</p>
      </div>
      <button>Checkout</button>
      <p>Continue Shopping</p>
    </div>
  );
}

export default OrderSummary;
