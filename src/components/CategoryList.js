import React from 'react';

const CategoryList = ({ categories, selected, onSelect }) => (
  <div className="category-list">
    <button
      className={!selected ? 'active' : ''}
      onClick={() => onSelect(null)}
    >
      All
    </button>
    {categories.map(cat => (
      <button
        key={cat}
        className={selected === cat ? 'active' : ''}
        onClick={() => onSelect(cat)}
      >
        {cat}
      </button>
    ))}
  </div>
);

export default CategoryList;