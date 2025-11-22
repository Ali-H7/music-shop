import styles from './AlbumOfTheMonth.module.css';

function AlbumOfTheMonth({ album }) {
  return (
    <div className={styles.albumOfTheMonthContainer}>
      <div className={styles.albumCover}>
        <img src={album.imageOfTheMonth} />
        <button className={`${styles.discoverBtn} ${styles.toggleFirstBtn}`}>Discover Now</button>
      </div>
      <div className={styles.textContainer}>
        <h3>Album of The Month</h3>
        <h1>{album.albumName + ' - ' + album.artist}</h1>
        <p className={styles.textDescription}>{album.description}</p>
        <button className={`${styles.discoverBtn} ${styles.toggleSecondBtn}`}>Discover Now</button>
      </div>
    </div>
  );
}

export default AlbumOfTheMonth;
