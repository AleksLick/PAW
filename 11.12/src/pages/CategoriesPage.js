import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesPage = () => {
  const categories = ['Technologia', 'Lifestyle', 'Podróże'];

  return (
    <div>
      <h1>Lista kategorii</h1>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <Link to={`/category/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesPage;
