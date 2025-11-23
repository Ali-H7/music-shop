import styles from './Navigation.module.css';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

function Navigation() {
  const [expandedSection, setExpandedSection] = useState([false, false, false, false]);

  function toggleSection(index) {
    const newState = [...expandedSection];
    newState[index] = !newState[index];
    setExpandedSection(newState);
  }

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
    <div className={styles.navigationContainer}>
      <div className={styles.navigation}>
        {navigationMap.map((section, i) => {
          return (
            <div key={section + i} className={styles.section}>
              <button className={styles.expandButton} onClick={() => toggleSection(i)}>
                <div className={`${styles.titleContainer} ${i === 3 ? styles.hide : ''}`}>
                  <h3 className={styles.title}>{section.title}</h3>
                  {i !== 3 && (
                    <div className={styles.expandIcon}>
                      {!expandedSection[i] && <Plus />}
                      {expandedSection[i] && <Minus />}
                    </div>
                  )}
                </div>
              </button>

              {
                <ul
                  className={`${styles.list} ${i === 3 ? styles.icons : ''} ${!expandedSection[i] && i !== 3 ? styles.hide : ''}`}
                >
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
              }
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Navigation;
