
import { useRoutes } from "react-router-dom";
import Homepage from "./pages/Home";
import ProductDetail from "./pages/productDetail";
import Register from "./compontes/Register";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import  Login  from "./compontes/Login";
import LayoutAdmin from "./compontes/layoutadmin";
// import Admin from "./pages/Admin/admin";

import AdminProductList from "./pages/Admin/List";



const routeCofig = [
  {
    path: "/admin",
    element: <LayoutAdmin />,
    children: [
      {
        path: "list",
        element: <AdminProductList />,
      },
    ],
  },

  { path: "/", element: <Homepage /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/product/:id", element: <ProductDetail /> },
];

function App() {
  const routes = useRoutes(routeCofig);

 return (
    <>
      <Header />
      <main>{routes}</main>
      <Footer />
    </>
  );
}

export default App;