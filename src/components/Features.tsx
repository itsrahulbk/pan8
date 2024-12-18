import React from 'react';
import { Leaf, Shield, Heart, Award } from 'lucide-react';

const features = [
  {
    icon: <Leaf className="w-6 h-6" />,
    title: "Plant-Based",
    description: "100% plant-derived protein sources for sustainable nutrition"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Clean Label",
    description: "No artificial ingredients, preservatives, or added sugars"
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Nutrition First",
    description: "Scientifically formulated for optimal health benefits"
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Premium Quality",
    description: "Highest quality ingredients sourced responsibly"
  }
];

export default function Features() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Pan 8</h2>
          <p className="text-lg text-gray-600">Discover the difference of premium plant protein</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}