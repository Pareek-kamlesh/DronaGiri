import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import './Products.css';
import CategoryList from '../components/CategoryList';
import ProductList from '../components/ProductList';

const API_URL = process.env.REACT_APP_API_URL;

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // <-- Add loading state
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get('category');

  useEffect(() => {
    setLoading(true);
    fetch(`${API_URL}/api/products/`)
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching products:', err);
        setLoading(false);
      });
  }, []);

  const categories = [...new Set(products.map(item => item.category))];

  const handleCategorySelect = (cat) => {
    setSearchParams(cat ? { category: cat } : {});
  };

  return (
    <div className="products-container">
      <CategoryList
        categories={categories}
        selected={selectedCategory}
        onSelect={handleCategorySelect}
      />
      <ProductList
        items={products.filter(
          item => !selectedCategory || item.category === selectedCategory
        )}
        loading={loading} // <-- Pass loading state
      />
    </div>
  );
};

export default Products;