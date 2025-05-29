import React from 'react';
import './Home.css'; // Create this if not using Tailwind
import p1 from '../assets/p1.jpg';
import p2 from '../assets/p2.jpg';
import p3 from '../assets/p3.jpg';
import p4 from '../assets/p4.jpg';
import p5 from '../assets/p5.jpg';
import p6 from '../assets/p6.jpg';
import p7 from '../assets/p7.jpg';
import p8 from '../assets/p8.jpg';
import p9 from '../assets/p9.jpg';
import p10 from '../assets/p10.jpg';
import p11 from '../assets/p11.jpg';
import p12 from '../assets/p12.jpg';
import p13 from '../assets/p13.jpg';
import p14 from '../assets/p14.jpg';
import p15 from '../assets/p15.jpg';

const products = [
  { src: p1},
  { src: p2},
  { src: p3 },
  { src: p4},
  { src: p5 },
  { src: p6},
  { src: p7},
  { src: p8},
  { src: p9},
  { src: p10},
  { src: p11},
  { src: p12},
  { src: p13},
  { src: p14},
  { src: p15}
];

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Our Pharma Business</h1>
      <p>Explore our quality range of syrups, powders, and juices.</p>

      <div className="product-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.src} alt={product.title} />
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
