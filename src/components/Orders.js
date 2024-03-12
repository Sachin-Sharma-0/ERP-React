// Orders.js
import React, { useState } from 'react';
import './Orders.css'; // Import your styles

const Orders = () => {
  // Mock data for orders
  const [orders, setOrders] = useState([
    { id: 1, customer: 'Customer A', date: '2024-03-09', status: 'Processing' },
    { id: 2, customer: 'Customer B', date: '2024-03-10', status: 'Shipped' },
    // Add more mock data as needed
  ]);

  const handleViewDetails = (orderId) => {
    // Implement logic to view order details (optional)
    const selectedOrder = orders.find((order) => order.id === orderId);
    console.log('View order details:', selectedOrder);
  };

  const handleUpdateStatus = (orderId, newStatus) => {
    // Implement logic to update order status (optional)
    const updatedOrders = orders.map((order) =>
      order.id === orderId ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
  };

  const handleDeleteOrder = (orderId) => {
    // Implement logic to delete an order (optional)
    const updatedOrders = orders.filter((order) => order.id !== orderId);
    setOrders(updatedOrders);
  };

  return (
    <div className="orders-container">
      <h1>Orders Management</h1>
      {/* Display order list with details */}
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Order Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.date}</td>
              <td>{order.status}</td>
              <td>
                <button onClick={() => handleViewDetails(order.id)}>View Details</button>
                <button onClick={() => handleUpdateStatus(order.id, 'Shipped')}>Update Status</button>
                <button onClick={() => handleDeleteOrder(order.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Add view details, update status, and delete functionality modals/forms (optional) */}
    </div>
  );
};

export default Orders;
