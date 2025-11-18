import styles from './FanFavorites.module.css';
import { Plus, Minus } from 'lucide-react';

function FanFavorites({ albums }) {
  const topAlbums = albums.slice(0, 4);
  return (
    <div className={styles.fanFavorites}>
      <h2 className={styles.title}>Fan Favorites</h2>
      <div className={styles.cards}>
        {topAlbums.map((album) => {
          return (
            <div key={album.id} className={styles.albumCard}>
              <img src={album.image} className={styles.albumCover} />
              <div className={styles.albumTitle}>
                <h3>{album.albumName}</h3>
                <p>{album.price}</p>
              </div>
              <p className={styles.artistName}>{album.artist}</p>
              <div className='add-to-cart'>
                <div className={styles.count}>
                  <Minus />
                  <p>0</p>
                  <Plus />
                </div>
                <button className={styles.cartButton}>Add to Cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FanFavorites;
