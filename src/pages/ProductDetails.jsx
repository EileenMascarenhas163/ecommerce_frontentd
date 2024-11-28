
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
    }
  ];
  

  
  const product = products.find(p => p.id === productId);

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="product-details">
      <h1>{product.name}</h1>
      <img src='https://www.pickfu.com/blog/wp-content/uploads/2019/09/test3.jpeg' width={200} alt={product.name} className="product-image" />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button   onClick={() => handleAddToCart(product)} className="add-to-cart-button bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
