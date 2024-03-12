// Calendar.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css'; // Import your styles

const OrdersCalendar = ({ orders }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const getOrdersForDate = () => {
    const formattedDate = selectedDate.toISOString().split('T')[0];
    return orders.filter((order) => order.date === formattedDate);
  };

  return (
    <div className="calendar-container">
      <h1>Orders Calendar View</h1>
      <Calendar onChange={handleDateChange} value={selectedDate} />
      <h2>Orders for {selectedDate.toDateString()}</h2>
      <ul>
        {getOrdersForDate().map((order) => (
          <li key={order.id}>{`Order ${order.id} - ${order.customer}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default OrdersCalendar;
