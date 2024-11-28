import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Order = () => {
  const { ordercart } = useCart();
  const navigate = useNavigate();

  return (
    <div className="p-6 max-w-6xl mx-auto bg-white shadow-lg rounded-lg">
      {ordercart.length > 0 ? (
        <div>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Order Details</h2>
          {ordercart.slice(1).map((order, orderIndex) => {
            // Calculate the total amount for each order
            const orderTotal = order.reduce((total, item) => {
              if (item && item.price && item.quantity) {
                return total + item.price * item.quantity;
              }
              return total;
            }, 0);

            return (
              <div key={orderIndex} className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Order {orderIndex + 1}</h3>
                <ul className="space-y-4">
                  {order.map((item, itemIndex) => {
                    if (!item || typeof item.price === 'undefined' || typeof item.quantity === 'undefined') {
                      return (
                        <li key={itemIndex} className="text-red-500">
                          <p>Invalid item data. Please check your cart.</p>
                        </li>
                      );
                    }
                    return (
                      <li key={item.id} className="flex items-start border-b border-gray-200 py-4">
                        <img
                          src='https://www.pickfu.com/blog/wp-content/uploads/2019/09/test3.jpeg'
                          alt={item.name}
                          className="w-32 h-32 object-cover rounded-md border border-gray-300"
                        />
                        <div className="ml-4 flex-1">
                          <h4 className="text-lg font-semibold text-gray-900">{item.name}</h4>
                          <p className="text-gray-600">Price: <span className="font-medium">${item.price.toFixed(2)}</span></p>
                          <p className="text-gray-600">Quantity: <span className="font-medium">{item.quantity}</span></p>
                          <p className="text-gray-900 font-semibold mt-2">Total: <span className="text-green-600">${(item.price * item.quantity).toFixed(2)}</span></p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <div className="mt-6 flex justify-end">
  <h4 className="text-lg font-semibold text-gray-800">
    Order Total: <span className="text-green-600">${orderTotal.toFixed(2)}</span>
  </h4>
</div>
              </div>
            );
          })}
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => navigate('/')}
              className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Go to Homepage
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-700">
          <p className="text-xl font-semibold">Your order is empty.</p>
          <p className="mt-2">Please go to the checkout page to place an order.</p>
        </div>
      )}
    </div>
  );
};

export default Order;
