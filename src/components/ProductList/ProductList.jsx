import styles from './ProductList.module.css';
import AlbumCard from '../AlbumCard/AlbumCard';
import Sort from '../Sort/Sort';
import AddToCartButton from '../AddToCartButton/AddToCartButton';
import { useOutletContext } from 'react-router';
import { useState } from 'react';
import PropTypes from 'prop-types';

function ProductList({ headingsTitle }) {
  const { albums, cart, setCart } = useOutletContext();
  const [sortValue, setSortValue] = useState('featured');

  let albumsToDisplay;

  if (headingsTitle === 'Fan Favorites') {
    albumsToDisplay = albums.slice(0, 4);
  } else if (sortValue === 'az') {
    albumsToDisplay = [...albums].sort((a, b) => a.albumName.localeCompare(b.albumName));
  } else if (sortValue === 'za') {
    albumsToDisplay = [...albums].sort((a, b) => b.albumName.localeCompare(a.albumName));
  } else if (sortValue === 'low') {
    albumsToDisplay = [...albums].sort((a, b) => a.price - b.price);
  } else if (sortValue === 'high') {
    albumsToDisplay = [...albums].sort((a, b) => b.price - a.price);
  } else {
    albumsToDisplay = [...albums];
  }

  return (
    <div className={styles.productListContainer}>
      <div className={styles.productList}>
        <h2 className={styles.title}>{headingsTitle}</h2>
        {headingsTitle !== 'Fan Favorites' && <Sort sortValueSetter={setSortValue} />}
        <div className={styles.cards}>
          {albumsToDisplay.map((album, i) => {
            return (
              <div
                key={album.id}
                className={`${styles.card} ${i === 3 && headingsTitle === 'Fan Favorites' ? styles.hide : ''}`}
              >
                <AlbumCard album={album} />
                {headingsTitle !== 'Fan Favorites' && (
                  <AddToCartButton albumId={album.id} cart={cart} cartSetter={setCart} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

ProductList.propTypes = {
  headingsTitle: PropTypes.string.isRequired,
};

export default ProductList;
