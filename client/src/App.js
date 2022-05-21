import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import ScrollToTop from './utils/ScrollToTop';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import About from './pages/About';
import Blog from './pages/Blog';
import AuthRoute from './components/AuthRoute';
import Login from './pages/Login';
import Register from './pages/Register';
import Success from './pages/Success';

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='shop' element={<Shop />} />
            <Route path='product/:id' element={<Product />} />
            <Route path='cart' element={<Cart />} />
            <Route path='contact' element={<Contact />} />
            <Route path='about' element={<About />} />
            <Route path='blog' element={<Blog />} />
          </Route>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='success' element={<Success />} />
        </Routes>
      </ScrollToTop>
    </Router>
  );
}

export default App;
