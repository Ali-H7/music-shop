import styles from './FanFavorites.module.css';
import { Link } from 'react-router';
function FanFavorites({ albums }) {
  const topAlbums = albums.slice(0, 4);
  return (
    <div className={styles.fanFavorites}>
      <h2 className={styles.title}>Fan Favorites</h2>
      <div className={styles.cards}>
        {topAlbums.map((album) => {
          return (
            <div key={album.id} className={styles.albumCard}>
              <Link to={`/product/${album.id}`}>
                <img src={album.image} className={styles.albumCover} />
              </Link>
              <div className={styles.albumTitle}>
                <Link to={`/product/${album.id}`}>
                  <h3 className={styles.ablumName}>{album.albumName}</h3>
                </Link>
                <p className={styles.price}>{album.price}</p>
              </div>
              <p className={styles.artistName}>{album.artist}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FanFavorites;
