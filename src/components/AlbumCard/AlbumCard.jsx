import styles from './AlbumCard.module.css';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

function AlbumCard({ album }) {
  return (
    <div>
      <Link to={`/product/${album.id}`}>
        <img src={album.image} className={styles.albumCover} />
      </Link>
      <div className={styles.albumTitle}>
        <div className={styles.ablumName}>
          <Link to={`/product/${album.id}`}>
            <h3 className={styles.ablumName}>{album.albumName}</h3>
          </Link>
        </div>
        <p className={styles.price}>{`${album.price.toFixed(3)} BHD`}</p>
      </div>
      <p className={styles.artistName}>{album.artist}</p>
    </div>
  );
}

AlbumCard.propTypes = {
  album: PropTypes.shape({
    id: PropTypes.number.isRequired,
    albumName: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    salesRanking: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }),
};

export default AlbumCard;
