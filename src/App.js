import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import TopBar from './components/TopBar';
import Home from './pages/Home';
import About from './pages/About';
import ThirdParty from './pages/ThirdParty';
import Certification from './pages/Certification';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import { FaWhatsapp } from 'react-icons/fa';

import AdminLogin from './pages/Admin/AdminLogin';
import AdminDashboard from './pages/Admin/AdminDashboard';
import AddProduct from './pages/Admin/AddProduct';

import AdminProducts from './pages/Admin/AdminProducts';
import UpdateProduct from './pages/Admin/UpdateProduct';
import Products from './pages/Products';

function App() {
  const ProtectedRoute = ({ element }) => {
    const token = localStorage.getItem('token');
    return token ? element : <Navigate to="/admin" />;
  };

  return (
    <Router>
      <TopBar />
      <Navbar />

      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        <Route path="/third-party" element={<ThirdParty />} />
        <Route path="/certification" element={<Certification />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />

        {/* Admin Pages */}
        <Route path="/admin/update-product/:id" element={<UpdateProduct />} />
        <Route path="/admin/products" element={<AdminProducts />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<ProtectedRoute element={<AdminDashboard />} />} />
        <Route path="/admin/add-product" element={<ProtectedRoute element={<AddProduct />} />} />
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
