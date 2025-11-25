import styles from './ErrorPage.module.css';
import { Link } from 'react-router';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

function ErrorPage() {
  const [count, setCount] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          navigate('/');
        } else {
          return prev - 1;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [count]);

  return (
    <div className={styles.errorContainer}>
      <h2>404 Error - Page not found.</h2>
      <p>You will be redirected to the homepage in {count} seconds.</p>
      <Link to='/'>
        <p className={styles.homepageText}>Go to the homepage now</p>
      </Link>
    </div>
  );
}
export default ErrorPage;
