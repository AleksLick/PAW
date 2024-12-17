import React from 'react';
import { useParams } from 'react-router-dom';

const PostPage = () => {
  const { id } = useParams();
  return (
    <section className="post-page">
      <h1>Wpis {id}</h1>
      <p>To jest pełna treść wpisu o id {id}...</p>
    </section>
  );
};

export default PostPage;
