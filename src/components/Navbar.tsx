import React from 'react';
import { Menu, ShoppingCart, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-emerald-600"><a href="/">Pan 8</a></span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
          <a href="/about" className="text-gray-700 hover:text-emerald-600">About</a>
          <a href="/products" className="text-gray-700 hover:text-emerald-600">Products</a>
            <a href="/why-pan8" className="text-gray-700 hover:text-emerald-600">Why Pan 8</a>
            <a href="/blog" className="text-gray-700 hover:text-emerald-600">Blog</a>
            <a href="/contact" className="text-gray-700 hover:text-emerald-600">Contact Us</a>

          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <User className="w-5 h-5 text-gray-700" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <ShoppingCart className="w-5 h-5 text-gray-700" />
            </button>
            <button className="md:hidden p-2 hover:bg-gray-100 rounded-full">
              <Menu className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}