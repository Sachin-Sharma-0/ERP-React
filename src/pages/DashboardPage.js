// DashboardPage.js
import React from 'react';
import Dashboard from '../components/Dashboard';

const DashboardPage = () => {
  // Mock data for total products and orders
  const totalProducts = 50; // Replace with actual count
  const totalOrders = 30; // Replace with actual count

  return (
    <div>
      <Dashboard totalProducts={totalProducts} totalOrders={totalOrders} />
    </div>
  );
};

export default DashboardPage;

