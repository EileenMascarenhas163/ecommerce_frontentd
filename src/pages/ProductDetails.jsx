// src/pages/ProductDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  // Extracting productId from the URL using useParams()
  const { productId } = useParams();

  // Sample static data (you would replace this with data fetched from an API)
  const products = [
    { id: '1', name: 'Product 1', description: 'This is the description for Product 1', price: 29.99, image: '/path/to/image1.jpg' },
    { id: '2', name: 'Product 2', description: 'This is the description for Product 2', price: 49.99, image: '/path/to/image2.jpg' },
    { id: '3', name: 'Product 3', description: 'This is the description for Product 3', price: 19.99, image: '/path/to/image3.jpg' }
  ];

  // Find the product by its ID from the products list
  const product = products.find(p => p.id === productId);

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="product-details">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} className="product-image" />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button className="add-to-cart-button">Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
