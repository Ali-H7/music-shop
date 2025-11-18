import styles from './FanFavorites.module.css';
import { useEffect, useState } from 'react';

function FanFavorites() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch('../../public/data.json')
      .then((res) => res.json())
      .then((data) => data.sort((a, b) => a.salesRanking - b.salesRanking)) // sort albums ranking
      .then((sortedData) => sortedData.slice(0, 4)) // take top 4 only
      .then((topAlbums) => setAlbums(topAlbums));
  }, []);

  return (
    <div className={styles.fanFavorites}>
      <h2 className={styles.title}>Fan Favorites</h2>
      <div className={styles.cards}>
        {albums.map((album) => {
          return (
            <div key={album.id} className={styles.albumCard}>
              <img src={album.image} className={styles.albumCover} />
              <div className={styles.albumTitle}>
                <h3>{album.albumName}</h3>
                <p>{album.price}</p>
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
