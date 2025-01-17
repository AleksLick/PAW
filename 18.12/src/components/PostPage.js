import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(data => setPost(data))
      .catch(error => console.error('Error fetching post:', error));

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error('Error fetching user:', error));
  }, [id]);

  if (!post || !user) return <div>Loading...</div>;

  return (
    <div className="post-content">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <div className="author">
        <h3>Author: {user.name}</h3>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
      </div>
    </div>
  );
}

export default PostPage;
