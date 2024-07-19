import { useRoutes } from 'react-router-dom'
import Home from './Components/Layout/Home';
import ProductDetail from './Components/Products/ProductDetail';
import Register from './Components/Pages/Register';
import NotFound from './Components/Pages/NotFound';
import Login from './Components/Pages/Login';
import AdminDashboard from './Components/Pages/admin/DashBoard';
import UpdateProduct from './Components/Pages/admin/UpdateProduct';
import AddProduct from './Components/Pages/admin/AddProduct';

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
      path: '/admin',
      element: <AdminDashboard />,
    },
    {
      path: "/admin/update-product/:id", element: <UpdateProduct />,
    },
    
    {
      path: "admin/product-add", element: <AddProduct />
    },
    {
      path: '*', // Route cho tất cả các đường dẫn không khớp
      element: <NotFound />, // Component cho trang 404
    }

  ];

  const element = useRoutes(routes);
  return element;
};

export default App