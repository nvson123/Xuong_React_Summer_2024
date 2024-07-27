import './App.css'
import Admin from './components/pages/Admin'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AddProduct from './components/pages/Add'
import UpdateProduct from './components/pages/UpdateProduct'
import Register from './components/pages/Register'
import Login from './components/pages/Login'
import 'react-toastify/dist/ReactToastify.css'
import { ProductProvider } from './context/ProductsContext'
// Import the ProductProvider

function App() {
  return (
    <ProductProvider>
      <Router>
        <div className='d-flex'>
          <div className='content'>
            <Routes>
              <Route path='/' element={<Admin />} />
              <Route path='/add-product' element={<AddProduct />} />
              <Route path='/update-product/:id' element={<UpdateProduct />} />
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ProductProvider>
  )
}

export default App
