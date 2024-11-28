
import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';

const ProductListing = () => {
 const [products] = useState([
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
]);

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Product Listing</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
