import App from './App';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'shop',
        element: <Shop />,
      },
    ],
  },
];

export default routes;
