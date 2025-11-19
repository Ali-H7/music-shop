import FanFavorites from '../components/FanFavorites/FanFavorites.jsx';
import AlbumOfTheMonth from '../components/AlbumOfTheMonth/AlbumOfTheMonth.jsx';
import Category from '../components/Category/Category.jsx';
import Newsletter from '../components/Newsletter/Newsletter.jsx';
import { useOutletContext } from 'react-router';

function Homepage() {
  const { albums, albumOfTheMonth } = useOutletContext();
  return (
    <>
      <FanFavorites albums={albums} />
      <AlbumOfTheMonth album={albumOfTheMonth} />
      <Category />
      <Newsletter />
    </>
  );
}

export default Homepage;
