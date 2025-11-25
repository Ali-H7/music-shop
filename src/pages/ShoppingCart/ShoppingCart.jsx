import styles from './ShoppingCart.module.css';
import ShoppingCartTable from '../../components/ShoppingCartTable/ShoppingCartTable';
import OrderSummary from '../../components/OrderSummary/OrderSummary';

function ShoppingCart() {
  return (
    <div className={styles.cartContainer}>
      <ShoppingCartTable />
      <div className={styles.orderSummaryContainer}>
        <OrderSummary />
      </div>
    </div>
  );
}

export default ShoppingCart;
