import { useState } from 'react';
import React from 'react';
import ProductCard from '../components/ProductCard';

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const featuredProducts = [
    { id: 6, name: 'Samsung Galaxy S23', image: '/images/samsung-s23.jpg', description: 'Flagship smartphone with a stunning display and powerful performance.' },
    { id: 7, name: 'Apple MacBook Pro M2', image: '/images/macbook-pro.jpg', description: 'High-performance laptop with the latest M2 chip for professionals.' },
    { id: 8, name: 'Sony WH-1000XM5 Headphones', image: '/images/sony-headphones.jpg', description: 'Industry-leading noise-canceling headphones with exceptional sound quality.' },
  ];
  
  const topDeals = [
    { id: 9, name: 'Dyson V15 Detect Vacuum', price: 599, image: '/images/dyson-v15.jpg', description: 'The most powerful vacuum cleaner with laser detection for fine dust.' },
    { id: 10, name: 'Bose SoundLink Revolve+ II', price: 249, image: '/images/bose-soundlink.jpg', description: 'Portable Bluetooth speaker with deep, loud, and immersive sound.' },
    { id: 11, name: 'Fitbit Charge 5', price: 129, image: '/images/fitbit-charge5.jpg', description: 'Advanced fitness tracker with built-in GPS and health metrics.' },
  ];
  
  const amazingDeals = [
    { id: 12, name: 'Instant Pot Duo Plus', price: 89, image: '/images/instant-pot.jpg', description: 'All-in-one pressure cooker for quick and delicious meals.' },
    { id: 13, name: 'Ring Video Doorbell Pro', price: 159, image: '/images/ring-doorbell.jpg', description: 'Smart video doorbell with advanced motion detection and HD video.' },
    { id: 14, name: 'GoPro HERO11 Black', price: 399, image: '/images/gopro-hero11.jpg', description: 'Rugged 4K action camera with stabilization and versatile mounting options.' },
  ];
  
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % featuredProducts.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length);

  return (
    <div className="h-screen  ">


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
