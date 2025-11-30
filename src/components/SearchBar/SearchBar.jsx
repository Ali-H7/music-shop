import styles from './SearchBar.module.css';
import { Search, X } from 'lucide-react';
import { useNavigate } from 'react-router';

function SearchBar({ searchQuery, searchSetter, productRef }) {
  const navigate = useNavigate();
  let pressedEnter = false;

  function handleInput(userInput) {
    const input = userInput.toLowerCase();
    searchSetter(input);
  }

  function scrollToResult(key, searchBarElement) {
    if (key === 'Enter') {
      const products = productRef;
      const searchBar = searchBarElement;
      pressedEnter = true;
      searchBar.blur();
      pressedEnter = false;
      setTimeout(() => {
        products.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }

  return (
    <div className={styles.searchContainer}>
      <Search className={styles.searchIcon} />
      <input
        value={searchQuery}
        className={styles.search}
        placeholder='Search'
        onKeyDown={(e) => scrollToResult(e.key, e.target)}
        onFocus={() => navigate('/shop/')}
        onChange={(e) => handleInput(e.target.value)}
        onBlur={() => {
          if (!pressedEnter) {
            setTimeout(() => {
              searchSetter('');
            }, 200);
          }
        }}
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
