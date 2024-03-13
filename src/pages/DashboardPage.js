// DashboardPage.js
import React from 'react';
import Dashboard from '../components/Dashboard';

const DashboardPage = () => {
  // Mock data for total products and orders
  const totalProducts = 50; 
  const totalOrders = 30; 

  return (
    <div>
      <Dashboard totalProducts={totalProducts} totalOrders={totalOrders} />
    </div>
  );
};

export default DashboardPage;

