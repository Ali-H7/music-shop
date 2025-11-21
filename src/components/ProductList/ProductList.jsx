import styles from './ProductList.module.css';
import AlbumCard from '../AlbumCard/AlbumCard';

function ProductList({ albums }) {
  const topAlbums = albums.slice(0, 4);

  return (
    <div className={styles.productList}>
      <h2 className={styles.title}>Fan Favorites</h2>
      <div className={styles.cards}>
        {topAlbums.map((album) => {
          return <AlbumCard key={album.id} album={album} />;
        })}
      </div>
    </div>
  );
}

export default ProductList;
