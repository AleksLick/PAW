import React from 'react';
import CategoryList from '../components/CategoryList';
import Post from '../components/Post';

const HomePage = () => {
  // Przykładowe dane
  const categories = ['Technologia', 'Lifestyle', 'Podróże'];
  const posts = [
    { title: 'Pierwszy post', content: 'To jest treść pierwszego posta' },
    { title: 'Drugi post', content: 'To jest treść drugiego posta' }
  ];

  return (
    <div>
      <h1>Witaj na Blogu!</h1>
      <CategoryList categories={categories} />
      {posts.map((post, index) => (
        <Post key={index} title={post.title} content={post.content} />
      ))}
    </div>
  );
};

export default HomePage;
