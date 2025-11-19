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
  ];

  return (
    <div className={styles.navigation}>
      {navigationMap.map((section) => {
        return (
          <div>
            <h3>section.title</h3>
            <ul>
              {section.list.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
