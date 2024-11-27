// src/pages/Checkout.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    paymentMethod: 'COD',
  });

  const navigate = useNavigate();
  const { cart, OrderaddToCart,  clearCart } = useCart(); // Extract functions and cart state

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add all items in the cart to the order cart
    cart.forEach((item) => {
      OrderaddToCart(item);
    });

    // Clear the cart after order is placed
    clearCart();

    // Navigate to the order confirmation page
    navigate('/order-confirmation');
  };

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Checkout</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="border px-2 py-1 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="border px-2 py-1 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block">Payment Method</label>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleInputChange}
            className="border px-2 py-1 w-full"
          >
            <option value="COD">Cash on Delivery</option>
            {/* Add more payment options here if needed */}
          </select>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
