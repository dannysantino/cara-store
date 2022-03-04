import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Product from './pages/Product';
import About from './pages/About';
import Blog from './pages/Blog';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
