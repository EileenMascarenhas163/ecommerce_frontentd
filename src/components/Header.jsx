// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { cart } = useCart();

  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-2xl">E-Shop</Link>
        <div className="flex items-center space-x-4">
          <Link to="/products">Products</Link>
          <Link to="/cart" className="relative">
            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-1">
              {cart.length}
            </span>
            Cart
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
