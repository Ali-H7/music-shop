import App from './App';
import Homepage from './pages/Homepage';
import Product from './pages/Product';
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
        path: 'cart',
        element: <ShoppingCart />,
      },
    ],
    // errorElement: <ErrorPage />,
  },
];

export default routes;
