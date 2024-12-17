import React from 'react';

const CategoryList = ({ categories }) => (
  <ul>
    {categories.map((category, index) => (
      <li key={index}>{category}</li>
    ))}
  </ul>
);

export default CategoryList;
