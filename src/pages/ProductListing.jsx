// src/pages/ProductListing.jsx
import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';

const ProductListing = () => {
  const [products] = useState([
    { id: 1, name: 'Product 1', price: 29.99, image: '/path/to/image' },
    { id: 2, name: 'Product 2', price: 39.99, image: '/path/to/image' },
    { id: 3, name: 'Product 3', price: 19.99, image: '/path/to/image' },
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
