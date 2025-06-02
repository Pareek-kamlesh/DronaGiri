import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo1.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navbarRef = useRef(null);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const toggleProducts = () => setProductsOpen(prev => !prev);
  const closeMenu = () => {
    setMenuOpen(false);
    setProductsOpen(false);
  };

  // Handle scroll background change
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} ref={navbarRef}>
      <div className="navbar-container">
        <Link to="/" className="logo">
          <img src={logo} alt="DronaGiri Healthcare Logo" className="navbar-logo" />
        </Link>

        <div className="hamburger" onClick={toggleMenu}>
          &#9776;
        </div>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
          <li className="dropdown">
            <span onClick={toggleProducts}>Products ▾</span>
            <ul className={`dropdown-menu ${productsOpen ? 'open' : ''}`}>
              <li><Link to="/products?category=syrup" onClick={closeMenu}>Syrup</Link></li>
              <li><Link to="/products?category=powder" onClick={closeMenu}>Powder</Link></li>
              <li><Link to="/products?category=juice" onClick={closeMenu}>Juice</Link></li>
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
