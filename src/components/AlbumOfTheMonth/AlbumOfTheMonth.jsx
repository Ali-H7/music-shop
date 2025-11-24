import styles from './AlbumOfTheMonth.module.css';
import PropTypes from 'prop-types';
import { ClipLoader } from 'react-spinners';

function AlbumOfTheMonth({ album }) {
  if (!album) {
    return (
      <div className={styles.albumOfTheMonthContainer}>
        <ClipLoader color={'#fff'} />
      </div>
    );
  }
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

AlbumOfTheMonth.propTypes = {
  album: PropTypes.shape({
    id: PropTypes.number.isRequired,
    albumName: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageOfTheMonth: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    salesRanking: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }),
};

export default AlbumOfTheMonth;
