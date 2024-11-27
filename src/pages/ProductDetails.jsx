// src/pages/ProductDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
const ProductDetails = () => {
  const { addToCart,cart } = useCart();

  const handleAddToCart = () => {
    addToCart({ ...cart, quantity: 1 }); // Adding product to cart with quantity 1
  };
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
      <img src='https://www.pickfu.com/blog/wp-content/uploads/2019/09/test3.jpeg' width={200} alt={product.name} className="product-image" />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button   onClick={handleAddToCart} className="add-to-cart-button bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
