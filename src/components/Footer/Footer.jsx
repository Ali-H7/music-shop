import styles from './Footer.module.css';
import Copyrights from '../Copyrights/Copyrights';
import Navigation from '../Navigation/Navigation';

function Footer() {
  return (
    <footer>
      <Navigation />
      <Copyrights />
    </footer>
  );
}

export default Footer;
