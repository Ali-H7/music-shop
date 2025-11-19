import styles from './Copyrights.module.css';

function Copyrights() {
  return (
    <div className={styles.copyrights}>
      <p>
        Copyright © 2025, Developed & designed by <span className={styles.name}>Ali Hasan</span>
        <a href='https://github.com/Ali-H7'>
          <button className={`fa fa-github ${styles.gitBtn}`} aria-hidden='true'></button>
        </a>
      </p>
    </div>
  );
}

export default Copyrights;
