import React from 'react';
import Products from '../components/Products';
import { Link } from 'react-router-dom';


const ProductsPage = () => {
  return (
    <div>
      <Products />
      <Link to="/">
        <button>Back to Dashboard</button>
      </Link>
    </div>
  );
};

export default ProductsPage;