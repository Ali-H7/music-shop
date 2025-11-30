import styles from './ProductList.module.css';
import AlbumCard from '../AlbumCard/AlbumCard';
import Sort from '../Sort/Sort';
import AddToCartButton from '../AddToCartButton/AddToCartButton';
import { useOutletContext } from 'react-router';
import { useState } from 'react';
import PropTypes from 'prop-types';

function ProductList({ headingsTitle, productRef }) {
  const { albums, cart, setCart, searchQuery } = useOutletContext();
  const [sortValue, setSortValue] = useState('featured');

  let albumsToDisplay = [...albums];

  if (searchQuery !== '' && headingsTitle !== 'FAN FAVORITES') {
    albumsToDisplay = [...albums].filter((item) => {
      if (searchQuery === '') {
        return false;
      } else {
        return item.albumName.toLowerCase().includes(searchQuery) || item.artist.toLowerCase().includes(searchQuery);
      }
    });
  }

  if (headingsTitle === 'FAN FAVORITES') {
    albumsToDisplay = albumsToDisplay.slice(0, 4);
  } else if (sortValue === 'az') {
    albumsToDisplay = [...albumsToDisplay].sort((a, b) => a.albumName.localeCompare(b.albumName));
  } else if (sortValue === 'za') {
    albumsToDisplay = [...albumsToDisplay].sort((a, b) => b.albumName.localeCompare(a.albumName));
  } else if (sortValue === 'low') {
    albumsToDisplay = [...albumsToDisplay].sort((a, b) => a.price - b.price);
  } else if (sortValue === 'high') {
    albumsToDisplay = [...albumsToDisplay].sort((a, b) => b.price - a.price);
  }

  if (albumsToDisplay.length === 0) {
    return (
      <div className={styles.emptySearchContainer}>
        <p>No items found. Please try a different search or browse our collection.</p>
      </div>
    );
  }

  return (
    <div className={styles.productListContainer}>
      <div className={styles.productList} ref={headingsTitle === 'OUR PRODUCTS' ? productRef : null}>
        <h2 className={styles.title}>{headingsTitle}</h2>
        {headingsTitle !== 'FAN FAVORITES' && <Sort sortValueSetter={setSortValue} />}
        <div className={styles.cards}>
          {albumsToDisplay.map((album, i) => {
            return (
              <div
                key={album.id}
                className={`${styles.card} ${i === 3 && headingsTitle === 'FAN FAVORITES' ? styles.hide : ''}`}
              >
                <AlbumCard album={album} />
                {headingsTitle !== 'FAN FAVORITES' && (
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
