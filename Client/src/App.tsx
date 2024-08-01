
import './App.css'
import CategoryNavBar from './components/CategoryNavBar'
import Guarantee from './components/Guarantee'
import Header from './components/Header'
import ProductCard from './components/ProductCard'
import ProductSection from './components/ProductSection'

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Category from './pages/category';
import Slidebar from './components/SlideBar'

function App() {
  return (

    <>
      <Header />
      <Slidebar/>
      <CategoryNavBar/>
      <Category />q
      <ProductSection/>
      <ProductCard/>
      <Guarantee/>
    </>

  )

}

export default App;
