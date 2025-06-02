import React, { useState } from 'react';
import axios from 'axios';
import './AddProduct.css';

const API_URL = process.env.REACT_APP_API_URL;

const AddProduct = () => {
  const [productName, setProductName] = useState('');
  const [composition, setComposition] = useState('');
  const [description, setDescription] = useState('');
  const [packagingSize, setPackagingSize] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (!token) {
      setMessage('Not authorized');
      return;
    }

    const formData = new FormData();
    formData.append('name', productName);
    formData.append('composition', composition);
    formData.append('description', description);
    formData.append('packagingSize', packagingSize);
    formData.append('category', category);
    formData.append('image', image);

    try {
      await axios.post(
        `${API_URL}/api/products/add`,
        formData,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
          }
        }
      );
      setMessage('Product added!');
      setProductName('');
      setComposition('');
      setDescription('');
      setPackagingSize('');
      setCategory('');
      setImage(null);
    } catch (error) {
      setMessage('Error adding product');
    }
  };

  return (
    <div className="admin-form-container">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Composition"
          value={composition}
          onChange={(e) => setComposition(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Packaging Size"
          value={packagingSize}
          onChange={(e) => setPackagingSize(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />
        <button type="submit">Add Product</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
};

export default AddProduct;