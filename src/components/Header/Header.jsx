import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <h1 className={styles.logo}>Music Shop</h1>
        <ul className={styles.list}>
          <li>Home</li>
          <li>Shop</li>
          <li>Cart</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
