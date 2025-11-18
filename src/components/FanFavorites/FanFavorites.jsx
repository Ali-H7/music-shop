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
      <h2>Fan Favorites</h2>
      {albums.map((album) => {
        return (
          <div key={album.id} className={styles.albumCard}>
            <img src={album.image} />
            <h3>{album.albumName}</h3>
            <p>{album.artist}</p>
            <p>{album.price}</p>
          </div>
        );
      })}
    </div>
  );
}

export default FanFavorites;
