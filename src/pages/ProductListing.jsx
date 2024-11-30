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

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  // Filter products based on search query and filter selection
  const filteredProducts = products.filter((product) => {
    const isSearchMatch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (selectedFilter === 'all') {
      return isSearchMatch;
    }
    
    if (selectedFilter === 'under-500') {
      return isSearchMatch && product.price < 500;
    }
    
    if (selectedFilter === '500-to-1000') {
      return isSearchMatch && product.price >= 500 && product.price <= 1000;
    }
    
    if (selectedFilter === 'above-1000') {
      return isSearchMatch && product.price > 1000;
    }

    return isSearchMatch;
  });

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Product Listing</h1>
      
      {/* Search bar */}
      <div className="mb-4">
        <input 
          type="text" 
          placeholder="Search products..." 
          className="border p-2 rounded w-full"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Filter options */}
      <div className="mb-4">
        <label className="mr-2">Filter by price:</label>
        <select 
          value={selectedFilter}
          onChange={(e) => setSelectedFilter(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="all">All</option>
          <option value="under-500">Under $500</option>
          <option value="500-to-1000">$500 - $1000</option>
          <option value="above-1000">Above $1000</option>
        </select>
      </div>

      {/* Product cards display */}
      <div className="grid grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
