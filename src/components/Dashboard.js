// Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = ({ totalProducts, totalOrders }) => {
  return (
    <div className="dashboard-container">
      <h1>Welcome to the Dashboard</h1>
      <div className="key-metrics">
        <div className="metric">
          <h2>Total Products</h2>
          <p>{totalProducts}</p>
        </div>
        <div className="metric">
          <h2>Total Orders</h2>
          <p>{totalOrders}</p>
        </div>
      </div>
      <div className="quick-navigation">
        <h2>Quick Navigation</h2>
        <Link to="/products">
          <button>Manage Products</button>
        </Link>
        <Link to="/orders">
          <button>Manage Orders</button>
        </Link>
        <Link to="/calendar">
          <button>View Calendar</button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
