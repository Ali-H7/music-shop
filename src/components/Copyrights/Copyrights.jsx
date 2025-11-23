import styles from './Copyrights.module.css';
function Copyrights() {
  return (
    <div className={styles.copyrights}>
      <p>Copyright © 2025, Developed & designed by</p>

      <div className={styles.nameContainer}>
        <a href='https://github.com/Ali-H7' target='_blank'>
          <span className={styles.name}>Ali Hasan</span>
        </a>
        <i className={`fa fa-github ${styles.icon}`} aria-hidden='true'></i>
      </div>
    </div>
  );
}

export default Copyrights;
