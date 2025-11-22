import styles from './Newsletter.module.css';

function Newsletter() {
  return (
    <div className={styles.newsletter}>
      <p className={styles.title}>Discover hidden gems, collector's editions, and subscriber-only deals.</p>
      <div className={styles.container}>
        <div className={styles.emailContainer}>
          <input type='email' placeholder='Enter Email Addresss' className={styles.emailInput} />
          <button className={styles.signUpBtn}>Sign Up</button>
        </div>
        <div className={styles.agreementContainer}>
          <input type='checkbox' />
          <p>Yes, spin me into your mailing list for offers and music news.</p>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
