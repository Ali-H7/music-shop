import styles from './AlbumOfTheMonth.module.css';
import PropTypes from 'prop-types';
import { ClipLoader } from 'react-spinners';
import { Link } from 'react-router';

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
        <Link to='/product/9/' className={styles.toggleFirstBtn}>
          <button className={`${styles.discoverBtn}`}>Discover Now</button>
        </Link>
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.albumTitle}>ALBUM OF THE MONTH</h2>
        <h3 className={styles.albumArtist}>{album.albumName + ' - ' + album.artist}</h3>
        <p className={styles.textDescription}>{album.description}</p>
        <Link to='/product/9/' className={styles.toggleSecondBtn}>
          <button className={`${styles.discoverBtn}`}>Discover Now</button>
        </Link>
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
