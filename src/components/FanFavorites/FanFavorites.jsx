import styles from './FanFavorites.module.css';
import AlbumCard from '../AlbumCard/AlbumCard';
function FanFavorites({ albums }) {
  const topAlbums = albums.slice(0, 4);
  return (
    <div className={styles.fanFavorites}>
      <h2 className={styles.title}>Fan Favorites</h2>
      <div className={styles.cards}>
        {topAlbums.map((album) => {
          return <AlbumCard key={album.id} album={album} />;
        })}
      </div>
    </div>
  );
}

export default FanFavorites;
