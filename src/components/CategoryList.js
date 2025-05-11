import React from 'react';

const CategoryList = ({ categories, onSelect }) => (
  <div className="category-list">
    {categories.map(category => (
      <div key={category} className="category" onClick={() => onSelect(category)}>
        <img src={`/assets/${category}.jpg`} alt={category} />
        <p>{category}</p>
      </div>
    ))}
  </div>
);

export default CategoryList;
