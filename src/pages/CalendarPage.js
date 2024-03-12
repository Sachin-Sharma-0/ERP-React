// CalendarPage.js
import React from 'react';
import OrdersCalendar from '../components/Calendar';
import { Link } from 'react-router-dom';

const CalendarPage = () => {
  // Mock data for orders
  const orders = [
    { id: 1, customer: 'Customer A', date: '2024-03-09', status: 'Processing' },
    { id: 2, customer: 'Customer B', date: '2024-03-10', status: 'Shipped' },
    // Add more mock data as needed
  ];

  return (
    <div>
      <OrdersCalendar orders={orders} />
      <Link to="/">
        <button>Back to Dashboard</button>
      </Link>
      <Link to="/orders">
        <button>Go to Orders</button>
      </Link>
    </div>
  );
};

export default CalendarPage;
