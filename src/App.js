import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TopBar from './components/TopBar';
import Home from './pages/Home';
import About from './pages/About';
import Syrup from './pages/Products/Syrup';
import Powder from './pages/Products/Powder';
import Juice from './pages/Products/Juice';
import ThirdParty from './pages/ThirdParty';
import Certification from './pages/Certification';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import { FaWhatsapp } from 'react-icons/fa';

function App() {
  return (
    <Router>
      <TopBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products/syrup" element={<Syrup />} />
        <Route path="/products/powder" element={<Powder />} />
        <Route path="/products/juice" element={<Juice />} />
        <Route path="/third-party" element={<ThirdParty />} />
        <Route path="/certification" element={<Certification />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <a
        href="https://wa.me/919351616121"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <FaWhatsapp size={40} />
      </a>
    </Router>
  );
}

export default App;
