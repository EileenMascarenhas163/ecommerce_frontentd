
import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Order = () => {
  const { ordercart } = useCart(); 
  const navigate = useNavigate();

  
  const totalAmount = ordercart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="p-4">
     
      {ordercart.length > 0 ? (
        <div>
          <h2 className="text-lg mb-4">Order Details</h2>
          <ul>
            {ordercart.map((item) => (
              <li key={item.id} className="border-b py-2">
                <img src='https://www.pickfu.com/blog/wp-content/uploads/2019/09/test3.jpeg' width={200}/>
                <h3 className="font-semibold">{item.name}</h3>
                <p>Price: ${item.price.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
              </li>
            ))}
          </ul>
          {/* <div className="mt-4">
            <h3 className="font-semibold">Total Amount: ${totalAmount.toFixed(2)}</h3>
          </div> */}
          <button
            onClick={() => navigate('/')}
            className="mt-4 bg-blue-500 text-white px-4 py-2"
          >
            Go to Homepage
          </button>
        </div>
      ) : (
        <p>Your order is empty. Please go to the checkout page to place an order.</p>
      )}
    </div>
  );
};

export default Order;
