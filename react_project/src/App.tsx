import { useRoutes } from 'react-router-dom'
import Home from './Components/Layout/Home';
import ProductDetail from './Components/Products/ProductDetail';
import Register from './Components/Pages/Register';
import NotFound from './Components/Pages/NotFound';
import Login from './Components/Pages/Login';

const App = () => {
  const routes = [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/product/:id',
      element: <ProductDetail />,
    },
    {
      path: '/register',
      element: <Register />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '*', // Route cho tất cả các đường dẫn không khớp
      element: <NotFound />, // Component cho trang 404
    },

  ];

  const element = useRoutes(routes);
  return element;
};

export default App