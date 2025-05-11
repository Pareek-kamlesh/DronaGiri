import React from 'react';
import './Home.css'; // Create this if not using Tailwind
import product1 from '../assets/product1.jpg';
import product2 from '../assets/product2.jpg';
import product3 from '../assets/product3.jpg';
import product4 from '../assets/product4.jpg';
import product5 from '../assets/product5.jpg';
import product6 from '../assets/product6.jpg';
import product7 from '../assets/product7.jpg';
import product8 from '../assets/product8.jpg';
import product9 from '../assets/product9.jpg';
import product10 from '../assets/product10.jpg';

const products = [
  { src: product1, title: 'ST Protein' },
  { src: product2, title: 'ST Protein- SF' },
  { src: product3, title: 'Stano Calcium' },
  { src: product4, title: 'B-Comlex' },
  { src: product5, title: 'Calcitan-B12' },
  { src: product6, title: 'Instanfy-Plus' },
  { src: product7, title: 'IRO MOZ' },
  { src: product8, title: 'Irotan' },
  { src: product9, title: 'Tomzyme' },
  { src: product10, title: 'Stanzyme' },
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
            <h4>{product.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
