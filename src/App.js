import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import ProductsPage from './pages/ProductsPage';
import OrdersPage from './pages/OrdersPage';
import CalendarPage from './pages/CalendarPage';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header or any other common components can go here */}
        <Routes>
          {/* Dashboard Page */}
          <Route path="/" element={<DashboardPage />} />

          {/* Products Page */}
          <Route path="/products" element={<ProductsPage />} />

          {/* Orders Page */}
          <Route path="/orders" element={<OrdersPage />} />

          {/* Calendar Page */}
          <Route path="/calendar" element={<CalendarPage />} />

          {/* Add additional routes as needed */}

          {/* Default route for unknown paths */}
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
