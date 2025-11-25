import styles from './Category.module.css';
import CategoryCard from '../CategoryCard/CategoryCard';
import cassette from '../../assets/cassette.webp';
import cd from '../../assets/cd.webp';
import vinyl from '../../assets/vinyl.webp';
import { Link } from 'react-router';
function Category() {
  return (
    <div className={styles.category}>
      <Link to='/shop/'>
        <CategoryCard image={cassette} mainText='CASSETTES' />
      </Link>
      <Link to='/shop/'>
        <CategoryCard image={cd} mainText='CDs' />
      </Link>
      <Link to='/shop/'>
        <CategoryCard image={vinyl} mainText='VINYL' />
      </Link>
    </div>
  );
}

export default Category;
