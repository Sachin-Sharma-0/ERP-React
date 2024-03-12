import React from 'react';
import Orders from '../components/Orders';
import { Link } from 'react-router-dom';

const OrdersPage = () => {
  return (
    <div>
      <Orders />
      <Link to="/">
        <button>Back to Dashboard</button>
      </Link>
    </div>
  );
};

export default OrdersPage;