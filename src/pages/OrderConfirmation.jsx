// src/pages/OrderConfirmation.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const OrderConfirmation = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Order Confirmation</h1>
      <p>Your order has been placed successfully.</p>
      <Link to="/" className="bg-blue-500 text-white px-4 py-2 mt-4">
        Go back to Home
      </Link>
    </div>
  );
};

export default OrderConfirmation;
