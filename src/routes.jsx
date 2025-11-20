import App from './App';
import Homepage from './pages/Homepage';
import Product from './pages/Product';
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
    ],
    // errorElement: <ErrorPage />,
  },
];

export default routes;
