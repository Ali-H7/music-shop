import styles from './Header.module.css';
import { Link } from 'react-router';
import { Menu, SquareX } from 'lucide-react';
import { useState } from 'react';
function Header({ quantity }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <h1 className={styles.logo}>Music Shop</h1>
        <div className={styles.menu}>
          <button className={styles.button} onClick={toggleMenu}>
            <Menu size={32} />
          </button>
        </div>
        <div className={`${styles.listContainer} ${isMenuOpen && styles.show}`}>
          <div className={styles.closeIcon}>
            <button className={styles.button} onClick={toggleMenu}>
              <SquareX size={32} />
            </button>
          </div>
          <ul className={styles.list}>
            <Link to='/' onClick={toggleMenu}>
              <li>Home</li>
            </Link>
            <Link to='/shop/' onClick={toggleMenu}>
              <li>Shop</li>
            </Link>
            <div className={styles.cartContainer}>
              <Link to='/cart/' onClick={toggleMenu}>
                <li>Cart</li>
              </Link>
              <div className={`${styles.qunatity} ${quantity > 0 && styles.show}`}>
                <p>{quantity}</p>
              </div>
            </div>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
