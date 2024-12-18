import React from 'react';
import { Check } from 'lucide-react';
import { benefits } from '../../data/benefits';

export default function BenefitsSection() {
  return (
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
  );
}