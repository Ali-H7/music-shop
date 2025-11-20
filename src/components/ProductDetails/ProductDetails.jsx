import styles from './ProductDetails.module.css';
import AddToCartButton from '../AddToCartButton/AddToCartButton';
import { useParams, useOutletContext } from 'react-router';
function ProductDetails() {
  const { id } = useParams();
  const { albums } = useOutletContext();
  const productId = Number(id);
  const album = albums.find((item) => item.id === productId);

  return (
    <div className={styles.container}>
      <div className={styles.productCard}>
        <img src={album.image} alt='Album cover' />
        <div className={styles.details}>
          <div>
            <h3>{`${album.albumName} - ${album.artist}`}</h3>
            <p className={styles.price}>{album.price}</p>
          </div>
          <p className={styles.description}>{album.description}</p>
          <AddToCartButton />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
