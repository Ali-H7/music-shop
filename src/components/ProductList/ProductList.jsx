import styles from './ProductList.module.css';
import AlbumCard from '../AlbumCard/AlbumCard';
import AddToCartButton from '../AddToCartButton/AddToCartButton';
import { useOutletContext } from 'react-router';
import { useState, useEffect } from 'react';

function ProductList({ headingsTitle }) {
  const { albums, cart, setCart } = useOutletContext();
  const [albumsToDisplay, setAlbumsToDisplay] = useState([]);

  useEffect(() => {
    if (headingsTitle === 'Fan Favorites') {
      setAlbumsToDisplay(albums.slice(0, 4));
    } else {
      setAlbumsToDisplay([...albums].sort(() => Math.random() - 0.5));
    }
  }, [albums]);

  return (
    <div className={styles.productList}>
      <h2 className={styles.title}>{headingsTitle}</h2>
      <div className={styles.cards}>
        {albumsToDisplay.map((album) => {
          return (
            <div key={album.id} className={styles.card}>
              <AlbumCard album={album} />
              {headingsTitle !== 'Fan Favorites' && (
                <AddToCartButton albumId={album.id} cart={cart} cartSetter={setCart} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductList;
