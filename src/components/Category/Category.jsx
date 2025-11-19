import styles from './Category.module.css';
import CategoryCard from '../CategoryCard/CategoryCard';
import cassette from '../../assets/cassette.webp';
import cd from '../../assets/cd.webp';
import vinyl from '../../assets/vinyl.webp';

function Category() {
  return (
    <div className={styles.category}>
      <CategoryCard image={cassette} mainText='Cassettes' />
      <CategoryCard image={cd} mainText='Cds' />
      <CategoryCard image={vinyl} mainText='Vinyl' />
    </div>
  );
}

export default Category;
