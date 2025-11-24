import styles from './Sort.module.css';
import PropTypes from 'prop-types';

function Sort({ sortValueSetter }) {
  return (
    <div className={styles.sort}>
      <label htmlFor='sort'>Sort by:</label>
      <select id='sort' className={styles.sort} onChange={(e) => sortValueSetter(e.target.value)}>
        <option value='featured'>Best Sellers</option>
        <option value='az'>Alphabetically, A-Z</option>
        <option value='za'>Alphabetically, Z-A</option>
        <option value='low'>Price, low to high</option>
        <option value='high'>Price, high to low</option>
      </select>
    </div>
  );
}

Sort.propTypes = {
  sortValueSetter: PropTypes.func.isRequired,
};

export default Sort;
