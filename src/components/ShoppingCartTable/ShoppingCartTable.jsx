import styles from './ShoppingCartTable.module.css';
import { useOutletContext } from 'react-router';
import { SquareX } from 'lucide-react';
import Quantity from '../Quantity/Quantity';

function ShoppingCartTable() {
  const { albumOfTheMonth } = useOutletContext();

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
          <tr>
            <td>
              <div className={styles.itemContainer}>
                <img src={albumOfTheMonth.image} alt='' className={styles.image} />
                <div className={styles.text}>
                  <p className={styles.title}>{albumOfTheMonth.albumName}</p>
                  <p className={styles.subText}>{albumOfTheMonth.artist}</p>
                </div>
              </div>
            </td>
            <td className={styles.subText}>{`${albumOfTheMonth.price} BHD`}</td>
            <td className={styles.subText}>
              <Quantity />
            </td>
            <td>
              <div className={`${styles.delete} ${styles.subText}`}>
                Delete <SquareX />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.itemContainer}>
                <img src={albumOfTheMonth.image} alt='' className={styles.image} />
                <div className={styles.text}>
                  <p className={styles.title}>{albumOfTheMonth.albumName}</p>
                  <p className={styles.subText}>{albumOfTheMonth.artist}</p>
                </div>
              </div>
            </td>
            <td className={styles.subText}>{`${albumOfTheMonth.price} BHD`}</td>
            <td className={styles.subText}>3</td>
            <td>
              <div className={`${styles.delete} ${styles.subText}`}>
                Delete <SquareX />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ShoppingCartTable;
