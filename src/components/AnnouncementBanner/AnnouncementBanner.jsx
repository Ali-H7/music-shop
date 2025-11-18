import styles from './AnnouncementBanner.module.css';

function AnnouncementBanner() {
  return (
    <div className={styles.banner}>
      <p>Free shipping for all order over £25 and just a reminder, all our deliveries are carbon neutral</p>
    </div>
  );
}

export default AnnouncementBanner;
