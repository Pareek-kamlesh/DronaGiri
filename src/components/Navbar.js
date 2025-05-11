// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Add this file for styling

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleProducts = () => setProductsOpen(!productsOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">DronaGiriHealthCare</Link>

        <div className="hamburger" onClick={toggleMenu}>
          &#9776; {/* Unicode for hamburger icon */}
        </div>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
          <li className="dropdown">
            <span onClick={toggleProducts}>Products ▾</span>
            <ul className={`dropdown-menu ${productsOpen ? 'open' : ''}`}>
              <li><Link to="/products/syrup" onClick={closeMenu}>Syrup</Link></li>
              <li><Link to="/products/powder" onClick={closeMenu}>Powder</Link></li>
              <li><Link to="/products/juice" onClick={closeMenu}>Juice</Link></li>
            </ul>
          </li>
          <li><Link to="/thirdparty" onClick={closeMenu}>Third Party Manufacturing</Link></li>
          <li><Link to="/certification" onClick={closeMenu}>Certification</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
