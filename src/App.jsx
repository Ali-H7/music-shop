import './App.css';
import Header from './components/Header/Header.jsx';
import AnnouncementBanner from './components/AnnouncementBanner/AnnouncementBanner.jsx';
import Footer from './components/Footer/Footer.jsx';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
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
      <Outlet context={{ albums, albumOfTheMonth }} />
      <Footer />
    </div>
  );
}

export default App;
