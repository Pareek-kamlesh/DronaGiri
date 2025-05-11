import React, { useState } from 'react';
import './Products.css';
import CategoryList from '../components/CategoryList';
import ProductList from '../components/ProductList';
import data from '../assets/products.json';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const categories = [...new Set(data.map(item => item.category))];

  return (
    <div className="products-container">
      <CategoryList categories={categories} onSelect={setSelectedCategory} />
      <ProductList items={data.filter(item => !selectedCategory || item.category === selectedCategory)} />
    </div>
  );
};

export default Products;
