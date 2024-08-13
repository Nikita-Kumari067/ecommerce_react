import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Product from './Pages/Product';
import Contact from './Pages/Contact';
import Cart from './Pages/Cart';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Wishlist from './Pages/Wishlist';




function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/wishlist' element={<Wishlist/>} />
       
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;