import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Product from './pages/Product';
import Cart from './pages/Cart';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='shop' element={<Shop />} />
        <Route exact path='product' element={<Product />} />
        <Route exact path='cart' element={<Cart />} />
        <Route exact path='contact' element={<Contact />} />
        <Route exact path='about' element={<About />} />
        <Route exact path='blog' element={<Blog />} />
      </Routes>
      <Newsletter />
      <Footer />
    </Router>
  );
}

export default App;
