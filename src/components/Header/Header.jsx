import styles from './Header.module.css';
import { Link } from 'react-router';
function Header({ quantity }) {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <h1 className={styles.logo}>Music Shop</h1>
        <ul className={styles.list}>
          <Link to='/'>
            <li>Home</li>
          </Link>
          <Link to='/shop/'>
            <li>Shop</li>
          </Link>
          <div className={styles.cartContainer}>
            <Link to='/cart/'>
              <li>Cart</li>
            </Link>
            <div className={`${styles.qunatity} ${quantity > 0 && styles.show}`}>
              <p>{quantity}</p>
            </div>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
