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

export default CategoryCard;
