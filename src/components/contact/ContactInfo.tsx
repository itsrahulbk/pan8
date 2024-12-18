import React from 'react';
import { contactInfo } from '../../data/contact';

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      {contactInfo.map((item, index) => (
        <a
          key={index}
          href={item.link}
          className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition group"
        >
          <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
            {item.icon}
          </div>
          <div>
            <h3 className="font-medium text-gray-900 group-hover:text-emerald-600 transition">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.content}</p>
          </div>
        </a>
      ))}
    </div>
  );
}