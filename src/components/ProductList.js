import React from 'react';

const ProductList = ({ items, loading }) => (
  <div className="product-list">
    {loading ? (
      <p>Loading products...</p>
    ) : items.length === 0 ? (
      <p>No products found.</p>
    ) : (
      items.map(item => (
        <div key={item._id} className="product-card">
          <img src={item.imageUrl} alt={item.name} />
          <h4>{item.name}</h4>
          <p>{item.description}</p>
        </div>
      ))
    )}
  </div>
);

export default ProductList;