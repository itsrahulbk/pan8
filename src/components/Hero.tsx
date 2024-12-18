import React from 'react';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80"
          alt="Healthy food background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Fuel Your Body with Premium Plant Protein
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Clean, sustainable, and delicious protein bars made with natural ingredients
          </p>
          <div className="space-x-4">
            <button className="bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-emerald-700 transition">
              Shop Now
            </button>
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}