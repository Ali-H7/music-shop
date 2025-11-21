import styles from './ShoppingCartTable.module.css';
import { useOutletContext } from 'react-router';
import { SquareX } from 'lucide-react';
import Quantity from '../Quantity/Quantity';

function ShoppingCartTable() {
  const { albums, cart } = useOutletContext();
  console.log(cart);
  return (
    <div className={styles.tableContainer}>
      <h1>Shopping Cart</h1>
      <table>
        <thead>
          <tr>
            <th scope='col'>Item</th>
            <th scope='col'>Price</th>
            <th scope='col'>Quantity</th>
            <th scope='col'></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((itemRef) => {
            const { id, quantity } = itemRef;
            const album = albums.find((item) => item.id === id);
            return (
              <tr>
                <td>
                  <div className={styles.itemContainer}>
                    <img src={album.image} alt='' className={styles.image} />
                    <div className={styles.text}>
                      <p className={styles.title}>{album.albumName}</p>
                      <p className={styles.subText}>{album.artist}</p>
                    </div>
                  </div>
                </td>
                <td className={styles.subText}>{`${album.price} BHD`}</td>
                <td className={styles.subText}>
                  <Quantity count={quantity} />
                </td>
                <td>
                  <div className={`${styles.delete} ${styles.subText}`}>
                    Delete <SquareX />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ShoppingCartTable;
