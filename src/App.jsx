import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './assets/pages/Home';
import About from './assets/pages/About';
import Products from './assets/pages/Products';
import Contact from './assets/pages/Contact';
import Navbar from './assets/components/Navbar';
import Footer from './assets/components/Footer';
import './App.css'


function App() {
  
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
