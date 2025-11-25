import App from './App';
import Homepage from './pages/Homepage';
import Product from './pages/Product';
import Shop from './pages/Shop';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router';

//sloution found (https://medium.com/@caden0002/fixing-scroll-position-issues-in-react-router-scroll-to-top-on-navigation-86bcfbdfc9db)
// credit to them
const Wrapper = ({ children }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    // Scroll to the top of the page when the route changes
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  return children;
};

const routes = [
  {
    path: '/',
    element: (
      <Wrapper>
        <App />
      </Wrapper>
    ),
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: 'product/:id',
        element: <Product />,
      },
      {
        path: 'shop',
        element: <Shop />,
      },
      {
        path: 'cart',
        element: <ShoppingCart />,
      },
    ],
    // errorElement: <ErrorPage />,
  },
];

export default routes;
