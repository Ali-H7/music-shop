import App from './App';
import Homepage from './pages/Homepage';
import Product from './pages/Product';
import Shop from './pages/Shop';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
const routes = [
  {
    path: '/',
    element: <App />,
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
