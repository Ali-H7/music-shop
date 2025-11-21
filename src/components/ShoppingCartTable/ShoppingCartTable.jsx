import styles from './ShoppingCartTable.module.css';
import { useOutletContext } from 'react-router';
import { Trash } from 'lucide-react';
import Quantity from '../Quantity/Quantity';

function ShoppingCartTable() {
  const { albums, cart, setCart } = useOutletContext();

  function handleDeleteBtn(id) {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }
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
              <tr key={album.id}>
                <td>
                  <div className={styles.itemContainer}>
                    <img src={album.image} alt='' className={styles.image} />
                    <div className={styles.text}>
                      <p className={styles.title}>{album.albumName}</p>
                      <p className={styles.subText}>{album.artist}</p>
                    </div>
                  </div>
                </td>
                <td className={styles.subText}>{`${album.price.toFixed(3)} BHD`}</td>
                <td className={styles.subText}>
                  <Quantity id={album.id} />
                </td>
                <td>
                  <button className={styles.deleteBtn} onClick={() => handleDeleteBtn(album.id)}>
                    <Trash />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {cart.length === 0 && <p className={styles.emptyMessage}>Looks like you haven't added anything yet!</p>}
    </div>
  );
}

export default ShoppingCartTable;
