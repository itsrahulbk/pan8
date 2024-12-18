import React from 'react';

interface ProductFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'pancake', name: 'Pancakes' },
  { id: 'dosa', name: 'Dosas' },
  { id: 'protein-bar', name: 'Protein Bars' },
];

export default function ProductFilter({ activeCategory, onCategoryChange }: ProductFilterProps) {
  return (
    <div className="flex flex-wrap gap-4 mb-8">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition ${
            activeCategory === category.id
              ? 'bg-emerald-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}