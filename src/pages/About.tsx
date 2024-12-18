import React from 'react';

export default function About() {
  return (
    <div className="pt-16 min-h-screen">
      <div className="relative py-16 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-xl">Our journey towards healthier, sustainable nutrition</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg mx-auto">
          <h2>Our Story</h2>
          <p>
            At Innaya Nutri Foods Private Limited, the journey of Pan 8 began with a simple yet 
            powerful idea: to bridge the gap between modern life's fast pace and the need for 
            balanced, nutritious meals.
          </p>

          <h2>Our Mission</h2>
          <p>
            To make nutrient-dense, plant-based food options easily accessible and enjoyable 
            for people on the go, empowering them to start their day with balanced nutrition.
          </p>

          <h2>Our Vision</h2>
          <p>
            To be a leader in providing healthy, plant-based, nutrient-rich convenience foods, 
            focusing on innovation, quality, and a positive impact on health and the environment.
          </p>

          <div className="my-12">
            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80"
              alt="Our team"
              className="rounded-lg shadow-md"
            />
          </div>

          <h2>Our Values</h2>
          <ul>
            <li>Health & Wellness: Prioritizing your well-being with clean, nutrient-dense foods.</li>
            <li>Innovation: Continuously crafting products that combine traditional grains with modern convenience.</li>
            <li>Quality: Rigorous quality checks ensure the best taste and nutrition.</li>
            <li>Sustainability: A commitment to eco-friendly practices, from sourcing to packaging.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}