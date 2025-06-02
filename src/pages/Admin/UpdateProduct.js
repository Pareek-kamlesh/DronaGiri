import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './UpdateProducts.css';
const API_URL = process.env.REACT_APP_API_URL;

const UpdateProduct = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {};

  const [name, setName] = useState(product ? product.name : '');
  const [composition, setComposition] = useState(product ? product.composition : '');
  const [description, setDescription] = useState(product ? product.description : '');
  const [packagingSize, setPackagingSize] = useState(product ? product.packagingSize : '');
  const [category, setCategory] = useState(product ? product.category : '');
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!product) {
      navigate('/admin/products');
    }
  }, [product, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const formData = new FormData();
    formData.append('name', name);
    formData.append('composition', composition);
    formData.append('description', description);
    formData.append('packagingSize', packagingSize);
    formData.append('category', category);
    if (image) formData.append('image', image);

    try {
      await axios.put(`${API_URL}/api/products/${product._id}`, formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      });
      setMessage('Product updated!');
      setTimeout(() => navigate('/admin/products'), 1000);
    } catch (err) {
      setMessage('Error updating product');
    }
  };

  if (!product) return null;

  return (
    <div className="update-product-container">
      <h2>Update Product</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Composition"
          value={composition}
          onChange={e => setComposition(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Packaging Size"
          value={packagingSize}
          onChange={e => setPackagingSize(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={e => setCategory(e.target.value)}
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={e => setImage(e.target.files[0])}
        />
        {product.imageUrl && (
          <div>
            <p>Current Image:</p>
            <img src={product.imageUrl} alt={product.name} width={100} />
          </div>
        )}
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
};

export default UpdateProduct;