import styles from './SearchBar.module.css';
import { Search, X } from 'lucide-react';
import { useNavigate } from 'react-router';

function SearchBar({ searchQuery, searchSetter }) {
  const navigate = useNavigate();

  function handleInput(userInput) {
    const input = userInput.toLowerCase();
    searchSetter(input);
  }

  return (
    <div className={styles.searchContainer}>
      <Search className={styles.searchIcon} />
      <input
        value={searchQuery}
        className={styles.search}
        placeholder='Search'
        onFocus={() => navigate('/shop/')}
        onChange={(e) => handleInput(e.target.value)}
        onBlur={() =>
          setTimeout(() => {
            searchSetter('');
          }, 200)
        }
      />
      {searchQuery && (
        <button className={styles.clearIcon} onClick={() => searchSetter('')}>
          <X />
        </button>
      )}
    </div>
  );
}

export default SearchBar;
