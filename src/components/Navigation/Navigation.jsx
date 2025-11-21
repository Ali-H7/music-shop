import styles from './Navigation.module.css';

function Navigation() {
  const navigationMap = [
    {
      title: 'Info',
      list: ['About Us', 'Delivery', 'Privacy Policy', 'Terms & Condition'],
    },
    {
      title: 'Customer Service',
      list: ['Contact', 'FAQ', 'Our Location', 'Warranty', 'Returns'],
    },
    {
      title: 'Account',
      list: ['Login', 'Register', 'Order History', 'Wishlist'],
    },
    {
      title: 'Follow US',
      list: [
        'fa-brands fa-x-twitter',
        'fa-brands fa-square-facebook',
        'fa-brands fa-square-instagram',
        'fa-brands fa-tiktok',
      ],
    },
  ];

  return (
    <div className={styles.navigation}>
      {navigationMap.map((section, i) => {
        return (
          <div key={section + i} className={styles.section}>
            <h3 className={styles.title}>{section.title}</h3>
            <ul className={`${styles.list} ${i === 3 && styles.icons}`}>
              {section.list.map((item) => {
                return i !== 3 ? (
                  <li key={item} className={styles.listItem}>
                    {item}
                  </li>
                ) : (
                  <li key={item} className={item}></li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default Navigation;
