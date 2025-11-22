import styles from './AlbumCard.module.css';
import { Link } from 'react-router';

function albumCard({ album }) {
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

export default albumCard;
