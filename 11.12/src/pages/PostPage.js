import React from 'react';
import { useParams } from 'react-router-dom';

const PostPage = () => {
  const { id } = useParams(); // Pobieranie ID z URL
  const post = { title: `Post #${id}`, content: 'To jest treść wybranego posta' }; // Symulacja danych

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default PostPage;
