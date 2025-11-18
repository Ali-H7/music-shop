import './App.css';
import Header from './components/Header/Header.jsx';
import AnnouncementBanner from './components/AnnouncementBanner/AnnouncementBanner.jsx';
import FanFavorites from './components/FanFavorites/FanFavorites.jsx';

function App() {
  return (
    <div className='app-container'>
      <Header />
      <AnnouncementBanner />
      <FanFavorites />
    </div>
  );
}

export default App;
