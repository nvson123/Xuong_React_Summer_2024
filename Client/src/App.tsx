
import './App.css'
import CategoryNavBar from './components/CategoryNavBar'
import Guarantee from './components/Guarantee'
import Header from './components/Header'
import ProductCard from './components/ProductCard'
import ProductSection from './components/ProductSection'
import Slidebar from './components/Slidebar'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Category from './pages/category';

function App() {
  return (

    <>
      <Header />
      <Slidebar/>
      <CategoryNavBar/>
      <ProductSection/>
      <ProductCard/>
      <Guarantee/>
    </>

  )

}

export default App;
