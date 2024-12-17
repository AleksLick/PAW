import React from 'react';
import CategoryList from '../components/CategoryList';

const CategoriesPage = () => {
  const categories = ['Technologia', 'Życie codzienne', 'Podróże'];

  return (
    <section className="categories">
      <h1>Kategorie</h1>
      <CategoryList categories={categories} />
    </section>
  );
};

export default CategoriesPage;
