import styles from './ProductDetails.module.css';
import AddToCartButton from '../AddToCartButton/AddToCartButton';
import { useParams, useOutletContext } from 'react-router';

function ProductDetails() {
  const { id } = useParams();
  const { albums, cart, setCart } = useOutletContext();
  const productId = Number(id);
  const album = albums.find((item) => item.id === productId);

  return (
    <div className={styles.container}>
      <div className={styles.productCard}>
        <div className={styles.imageContainer}>
          <img src={album.image} alt='Album cover' />
        </div>
        <div className={styles.details}>
          <div>
            <h3>{`${album.albumName} - ${album.artist}`}</h3>
            <p className={styles.price}>{`${album.price.toFixed(3)} BHD`}</p>
          </div>
          <p className={styles.description}>{album.description}</p>
          <AddToCartButton albumId={album.id} cart={cart} cartSetter={setCart} />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
