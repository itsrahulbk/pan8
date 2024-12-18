import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Pan 8</h3>
            <p className="text-sm">Your Partner in Every Success Story</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/products" className="hover:text-emerald-500">Products</Link></li>
              <li><Link to="/about" className="hover:text-emerald-500">About Us</Link></li>
              <li><Link to="/why-pan8" className="hover:text-emerald-500">Why Pan 8</Link></li>
              <li><Link to="/blog" className="hover:text-emerald-500">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-500">Contact Us</Link></li>

            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                innayanutrifoods@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +91 77367 41364
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                F223, DLF NTH, Kakkanad, Kochi - 682037
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="www.instagram.com/pan8.nutri" className="hover:text-emerald-500">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="www.linkedin/innayanutrifoods" className="hover:text-emerald-500">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Innaya Nutri Foods Private Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}