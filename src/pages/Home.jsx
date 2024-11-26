// src/pages/Home.jsx
import React from 'react';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const featuredProducts = [
    { id: 1, name: 'Product 1', price: 29.99, image: '/path/to/image' },
    { id: 2, name: 'Product 2', price: 39.99, image: '/path/to/image' },
  ];

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Featured Products</h1>
      <div className="grid grid-cols-2 gap-4">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
