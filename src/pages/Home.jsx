import { useState } from 'react';
import React from 'react';
import ProductCard from '../components/ProductCard';

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredProducts = [
    { id: 1, name: 'Featured Product 1', image: '/images/ldfcnld.jpg', description: 'Amazing Product 1' },
    { id: 2, name: 'Featured Product 2', image: '/featured2.jpg', description: 'Amazing Product 2' },
    { id: 3, name: 'Featured Product 3', image: '/featured3.jpg', description: 'Amazing Product 3' },
  ];

  const topDeals = [
    { id: 1, name: 'Top Deal 1', price: '99', image: '/images/ldfcnld.jpeg' },
    { id: 2, name: 'Top Deal 2', price: '149', image: '/topdeal2.jpg' },
    { id: 3, name: 'Top Deal 3', price: '199', image: '/topdeal3.jpg' },
  ];

  const amazingDeals = [
    { id: 1, name: 'Amazing Deal 1', price: '49', image: '/amazingdeal1.jpg' },
    { id: 2, name: 'Amazing Deal 2', price: '89', image: '/amazingdeal2.jpg' },
    { id: 3, name: 'Amazing Deal 3', price: '129', image: '/amazingdeal3.jpg' },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % featuredProducts.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length);

  return (
    <div className="h-screen  ">
      {/* Featured Products Carousel */}
     

      {/* Featured Products Carousel */}
      <section className="my-8">
        <h2 className="text-3xl font-bold text-center mb-6">Featured Products</h2>
        <div className="relative max-w-4xl mx-auto overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {featuredProducts.map((product, index) => (
              <div key={product.id} className="min-w-full flex-shrink-0">
                <img src='https://www.pickfu.com/blog/wp-content/uploads/2019/09/test3.jpeg' alt={product.name} className="w-full h-64 object-cover rounded-lg shadow" />
                <div className="text-center mt-4">
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Carousel Controls */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow hover:bg-gray-200"
          >
            &#8249;
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow hover:bg-gray-200"
          >
            &#8250;
          </button>
        </div>
      </section>

      {/* Amazing Deals */}
      <section className="my-8">
        <h2 className="text-3xl font-bold text-center mb-6">Amazing Deals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {amazingDeals.map((deal) => (
            <ProductCard key={deal.id} product={deal} />
          ))}
        </div>
      </section>

      {/* Top Deals */}
      <section className="my-8">
        <h2 className="text-3xl font-bold text-center mb-6">Top Deals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {topDeals.map((deal) => (
            <ProductCard key={deal.id} product={deal} />
          ))}
        </div>
      </section>
    </div>
  );
}
