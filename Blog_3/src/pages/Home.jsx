import React from 'react';
import PostCard from '../components/PostCard';

const Home = () => {
  const posts = [
    { id: 1, title: 'Pierwszy Wpis', excerpt: 'To jest krótki opis wpisu...' },
    { id: 2, title: 'Drugi Wpis', excerpt: 'Kolejny interesujący wpis...' },
  ];

  return (
    <section className="home">
      <h1>Strona Główna</h1>
      <div className="posts">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default Home;
