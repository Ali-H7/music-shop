import './App.css';
import Header from './components/Header/Header.jsx';
import AnnouncementBanner from './components/AnnouncementBanner/AnnouncementBanner.jsx';
import FanFavorites from './components/FanFavorites/FanFavorites.jsx';
import { useEffect, useState } from 'react';

function App() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch('./public/data.json')
      .then((res) => res.json())
      .then((data) => data.sort((a, b) => a.salesRanking - b.salesRanking)) // sort albums ranking
      .then((sortedData) => sortedData.slice(0, 4)) // take top 4 only
      .then((topAlbums) => setAlbums(topAlbums));
  }, []);
  return (
    <div className='app-container'>
      <Header />
      <AnnouncementBanner />
      <FanFavorites albums={albums} />
    </div>
  );
}

export default App;
