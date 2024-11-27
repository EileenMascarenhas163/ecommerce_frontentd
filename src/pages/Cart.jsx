// src/pages/Cart.jsx
import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const handleQuantityChange = (id, event) => {
    const quantity = parseInt(event.target.value, 10);
    // Ensure the quantity is a valid positive integer
    if (quantity > 0) {
      updateQuantity(id, quantity);
    }
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between mb-4">
              <div className="flex items-center">
                <img src='https://www.pickfu.com/blog/wp-content/uploads/2019/09/test3.jpeg' alt={item.name} className="w-16 h-16 object-cover mr-4" />
                <span>{item.name}</span>
              </div>
              <div className="flex items-center">
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, e)}
                  className="w-16 p-1 border rounded text-center"
                  min="1"
                />
              </div>
              <div>${(item.price * item.quantity).toFixed(2)}</div>
              <button onClick={() => removeFromCart(item.id)} className="text-red-500">Remove</button>
            </div>
          ))}
          <div className="mt-4">
            <p>Total: ${total.toFixed(2)}</p>
            <Link to="/checkout" className="bg-blue-500 text-white px-4 py-2 mt-4 inline-block">Proceed to Checkout</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
