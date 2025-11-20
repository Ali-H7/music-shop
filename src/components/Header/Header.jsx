import styles from './Header.module.css';
import { Link } from 'react-router';
function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <h1 className={styles.logo}>Music Shop</h1>
        <ul className={styles.list}>
          <Link to='/'>
            <li>Home</li>
          </Link>
          <li>Shop</li>
          <li>Cart</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
