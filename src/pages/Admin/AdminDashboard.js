import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/admin');
    }
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/admin');
  };

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <div className="dashboard-actions">
        <button onClick={() => navigate('/admin/add-product')}>Add Product</button>
        <button onClick={() => navigate('/admin/products')}>Show Products</button>
      </div>
      <button className="logout-btn" onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;