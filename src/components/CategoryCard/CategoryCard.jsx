import styles from './CategoryCard.module.css';
import PropTypes from 'prop-types';
function CategoryCard({ image, mainText }) {
  return (
    <div className={styles.imageContainer}>
      <img src={image} alt={mainText} className={styles.image} />
      <div className={styles.text}>
        <p>{mainText}</p>
        <p className={styles.textSecondary}>[ Shop Now ]</p>
      </div>
    </div>
  );
}

CategoryCard.propTypes = {
  image: PropTypes.string.isRequired,
  mainText: PropTypes.string.isRequired,
};

export default CategoryCard;
