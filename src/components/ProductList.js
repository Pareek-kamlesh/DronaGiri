import React from 'react';

const ProductList = ({ items }) => (
  <div className="product-list">
    {items.map(item => (
      <div key={item.name} className="product-card">
        <img src={`/assets/${item.image}`} alt={item.name} />
        <h4>{item.name}</h4>
        <p>{item.description}</p>
      </div>
    ))}
  </div>
);

export default ProductList;
