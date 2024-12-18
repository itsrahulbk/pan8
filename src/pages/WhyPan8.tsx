import React from 'react';
import { Check, Leaf, Shield, Heart, Award } from 'lucide-react';

const benefits = [
  {
    title: "Nutrient-Dense Convenience",
    description: "Our ready-to-cook and ready-to-eat mixes are packed with plant-based proteins, vitamins, minerals, and fiber-rich ingredients.",
    items: [
      "Essential proteins for energy and muscle health",
      "Vitamins and minerals from whole grains",
      "High fiber content for better digestion",
      "Sustained energy throughout the day"
    ]
  },
  {
    title: "Authentic, Transparent Ingredients",
    description: "We prioritize authenticity and transparency in every product we create.",
    items: [
      "No artificial additives or preservatives",
      "Whole, natural grains and superfoods",
      "Clear, simple labeling",
      "Responsibly sourced ingredients"
    ]
  },
  {
    title: "Powered by Traditional Indian Grains",
    description: "We embrace the nutritional wisdom of ancient Indian grains combined with modern flavors.",
    items: [
      "Naturally gluten-free options",
      "Rich in protein and micronutrients",
      "Traditional grains like millet and jowar",
      "Sustainable farming practices"
    ]
  }
];

export default function WhyPan8() {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative py-16 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Why Pan 8?</h1>
            <p className="text-xl">Your Partner in Every Success Story</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-gray-600">
            In today's fast-paced world, finding the balance between convenience and nutrition 
            can be challenging. At Pan 8, we bridge that gap by offering nutrient-dense, 
            plant-based food options that are quick, healthy, and sustainable.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 mb-6">{benefit.description}</p>
              <ul className="space-y-3">
                {benefit.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="bg-emerald-50 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">The Pan 8 Difference</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Leaf className="w-6 h-6" />, text: "100% Plant-Based" },
              { icon: <Shield className="w-6 h-6" />, text: "No Artificial Additives" },
              { icon: <Heart className="w-6 h-6" />, text: "Health Focused" },
              { icon: <Award className="w-6 h-6" />, text: "Premium Quality" }
            ].map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-4">
                  {feature.icon}
                </div>
                <span className="font-medium text-gray-900">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}