import styles from './AlbumOfTheMonth.module.css';

function AlbumOfTheMonth({ album }) {
  return (
    <div className={styles.albumOfTheMonthContainer}>
      <img src={album.imageOfTheMonth} className={styles.albumCover} />
      <div className={styles.textContainer}>
        <h4>Album of The Month</h4>
        <h1>{album.albumName + ' - ' + album.artist}</h1>
        <p className={styles.textDescription}>{album.description}</p>
        <button className={styles.discoverBtn}>Discover Now</button>
      </div>
    </div>
  );
}

export default AlbumOfTheMonth;
