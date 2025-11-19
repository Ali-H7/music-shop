import App from './App';
import Homepage from './pages/Homepage';
const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
    ],
    // errorElement: <ErrorPage />,
  },
];

export default routes;
