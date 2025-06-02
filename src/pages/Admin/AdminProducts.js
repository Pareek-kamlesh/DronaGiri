import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AdminProducts.css';
const API_URL = process.env.REACT_APP_API_URL;

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/products/`);
      setProducts(res.data);
    } catch (err) {
      setMessage('Error fetching products');
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    const token = localStorage.getItem('token');
    if (!window.confirm('Are you sure you want to delete this product?')) return;
    try {
      await axios.delete(`${API_URL}/api/products/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setMessage('Product deleted');
      setProducts(products.filter(p => p._id !== id));
    } catch (err) {
      setMessage('Error deleting product');
    }
  };

  const handleUpdate = (product) => {
    navigate(`/admin/update-product/${product._id}`, { state: { product } });
  };

  return (
    <div className="admin-products">
      <h2>All Products</h2>
      {message && <p>{message}</p>}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Composition</th>
            <th>Description</th>
            <th>Packaging Size</th>
            <th>Category</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(prod => (
            <tr key={prod._id}>
              <td>{prod.name}</td>
              <td>{prod.composition}</td>
              <td>{prod.description}</td>
              <td>{prod.packagingSize}</td>
              <td>{prod.category}</td>
              <td>
                {prod.imageUrl && <img src={prod.imageUrl} alt={prod.name} width={60} />}
              </td>
              <td>
                <button onClick={() => handleUpdate(prod)}>Update</button>
                <button onClick={() => handleDelete(prod._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminProducts;