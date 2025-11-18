import './App.css';
import Header from './components/Header/Header.jsx';
import AnnouncementBanner from './components/AnnouncementBanner/AnnouncementBanner.jsx';
import FanFavorites from './components/FanFavorites/FanFavorites.jsx';
import AlbumOfTheMonth from './components/AlbumOfTheMonth/AlbumOfTheMonth.jsx';

import { useEffect, useState } from 'react';

function App() {
  const [albums, setAlbums] = useState([]);
  const [albumOfTheMonth, setAlbumOfTheMonth] = useState('');
  useEffect(() => {
    fetch('./public/data.json')
      .then((res) => res.json())
      .then((data) => data.sort((a, b) => a.salesRanking - b.salesRanking)) // sort albums ranking
      .then((sortedAlbums) => {
        setAlbums(sortedAlbums);
        setAlbumOfTheMonth(sortedAlbums[11]);
      });
  }, []);
  return (
    <div className='app-container'>
      <Header />
      <AnnouncementBanner />
      <FanFavorites albums={albums} />
      <AlbumOfTheMonth album={albumOfTheMonth} />
    </div>
  );
}

export default App;
