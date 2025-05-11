import React from 'react';
import syrupData from '../../assets/syrups.json';

const Syrup = () => (
  <div className="product-page">
    <h2>Syrups</h2>
    <div className="product-grid">
      {syrupData.map((item, i) => (
        <div key={i} className="product-card">
          <img src={`/assets/${item.image}`} alt={item.name} />
          <h4>{item.name}</h4>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Syrup;
