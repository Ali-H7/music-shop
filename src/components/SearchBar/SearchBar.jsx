import styles from './SearchBar.module.css';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router';

function SearchBar({ searchSetter }) {
  const navigate = useNavigate();

  function handleInput(userInput) {
    const input = userInput.toLowerCase();
    searchSetter(input);
  }

  return (
    <div className={styles.searchContainer}>
      <Search className={styles.searchIcon} />
      <input
        className={styles.search}
        type='search'
        placeholder='Search'
        onFocus={() => navigate('/shop/')}
        onChange={(e) => handleInput(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
