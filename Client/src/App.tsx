import './App.css';
import Header from './components/Header';
import Slidebar from './components/SlideBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Category from './pages/category';

function App() {
  return (
    <Router>
      <>
        <Header />
        {/* <Slidebar /> */}
        <Routes>
          <Route path="/category" element={<Category />} /> 
        </Routes>
        
      </>
    </Router>
  );
}

export default App;
