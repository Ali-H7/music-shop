import styles from './AlbumOfTheMonth.module.css';

function AlbumOfTheMonth({ album }) {
  return (
    <div>
      <img src={album.image} />
      <div>
        <h4>Album of The Month</h4>
        <h1>{album.albumName + ' - ' + album.artist}</h1>
        <p>{album.description}</p>
        <button>Discover Now</button>
      </div>
    </div>
  );
}

export default AlbumOfTheMonth;
