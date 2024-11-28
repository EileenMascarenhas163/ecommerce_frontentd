
import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
const ProductDetails = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity: 1 }); 
  };
  
  const { productId } = useParams();

  
  const products = [
    { 
      id: 1, 
      name: 'Samsung Galaxy S23', 
      price: 799.99, 
      image: '/images/samsung-s23.jpg', 
      description: 'The latest Samsung flagship with a stunning 6.8" AMOLED display and 200MP camera.' 
    },
    { 
      id: 2, 
      name: 'Apple AirPods Pro 2', 
      price: 249.99, 
      image: '/images/airpods-pro2.jpg', 
      description: 'Noise-cancelling earbuds with spatial audio and a comfortable fit.' 
    },
    { 
      id: 3, 
      name: 'Sony Bravia XR OLED 55"', 
      price: 1499.99, 
      image: '/images/sony-bravia-oled.jpg', 
      description: 'A premium OLED TV with stunning picture quality and intelligent sound processing.' 
    },
    { 
      id: 4, 
      name: 'Logitech MX Master 3S', 
      price: 99.99, 
      image: '/images/logitech-mx-master.jpg', 
      description: 'Advanced ergonomic mouse with customizable buttons and incredible battery life.' 
    },
    { 
      id: 5, 
      name: 'Nintendo Switch OLED', 
      price: 349.99, 
      image: '/images/nintendo-switch-oled.jpg', 
      description: 'The popular hybrid gaming console with a vivid 7" OLED screen.' 
    },
    { id: 6, name: 'Samsung Galaxy S23', image: '/images/samsung-s23.jpg', description: 'Flagship smartphone with a stunning display and powerful performance.' },
    { id: 7, name: 'Apple MacBook Pro M2', image: '/images/macbook-pro.jpg', description: 'High-performance laptop with the latest M2 chip for professionals.' },
    { id: 8, name: 'Sony WH-1000XM5 Headphones', image: '/images/sony-headphones.jpg', description: 'Industry-leading noise-canceling headphones with exceptional sound quality.' },
   
    { id: 9, name: 'Dyson V15 Detect Vacuum', price: 599, image: '/images/dyson-v15.jpg', description: 'The most powerful vacuum cleaner with laser detection for fine dust.' },
    { id: 10, name: 'Bose SoundLink Revolve+ II', price: 249, image: '/images/bose-soundlink.jpg', description: 'Portable Bluetooth speaker with deep, loud, and immersive sound.' },
    { id: 11, name: 'Fitbit Charge 5', price: 129, image: '/images/fitbit-charge5.jpg', description: 'Advanced fitness tracker with built-in GPS and health metrics.' },

{ id: 12, name: 'Instant Pot Duo Plus', price: 89, image: '/images/instant-pot.jpg', description: 'All-in-one pressure cooker for quick and delicious meals.' },
{ id: 13, name: 'Ring Video Doorbell Pro', price: 159, image: '/images/ring-doorbell.jpg', description: 'Smart video doorbell with advanced motion detection and HD video.' },
{ id: 14, name: 'GoPro HERO11 Black', price: 399, image: '/images/gopro-hero11.jpg', description: 'Rugged 4K action camera with stabilization and versatile mounting options.' },

  ];
  

  
  const product = products.find(p => p.id == productId);

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="product-details p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg flex flex-col md:flex-row">
    <div className="flex-shrink-0 w-full md:w-1/3 mb-4 md:mb-0">
      <img 
        src='https://www.pickfu.com/blog/wp-content/uploads/2019/09/test3.jpeg' 
        alt={product.name} 
        className="w-auto h-auto object-cover rounded-lg shadow-md" 
      />
    </div>
    <div className="flex-1 ml-0 md:ml-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
      <p className="text-gray-700 text-lg mb-4">{product.description}</p>
      <p className="text-gray-900 text-xl font-semibold mb-4">Price: <span className="text-green-600">${product.price.toFixed(2)}</span></p>
      <button
        onClick={() => handleAddToCart(product)}
        className="w-full bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Add to Cart
      </button>
    </div>
  </div>
  

  );
};

export default ProductDetails;
