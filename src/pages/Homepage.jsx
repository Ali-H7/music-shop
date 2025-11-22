import ProductList from '../components/ProductList/ProductList.jsx';
import AlbumOfTheMonth from '../components/AlbumOfTheMonth/AlbumOfTheMonth.jsx';
import Category from '../components/Category/Category.jsx';
import Newsletter from '../components/Newsletter/Newsletter.jsx';
import { useOutletContext } from 'react-router';

function Homepage() {
  const { albumOfTheMonth } = useOutletContext();
  return (
    <>
      <ProductList headingsTitle={'Fan Favorites'} />
      <AlbumOfTheMonth album={albumOfTheMonth} />
      {/* <Category /> */}
      <Newsletter />
    </>
  );
}

export default Homepage;
