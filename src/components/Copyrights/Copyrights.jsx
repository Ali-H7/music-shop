import styles from './Copyrights.module.css';

function Copyrights() {
  return (
    <div className={styles.copyrights}>
      <p>
        Copyright © 2025, Developed & designed by{' '}
        <a href='https://github.com/Ali-H7'>
          <span className={styles.name}>Ali Hasan</span>
        </a>
      </p>
    </div>
  );
}

export default Copyrights;
