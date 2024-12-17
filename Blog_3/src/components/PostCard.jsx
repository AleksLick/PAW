import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => (
  <article className="post-card">
    <h2>{post.title}</h2>
    <p>{post.excerpt}</p>
    <Link to={`/post/${post.id}`}>Czytaj więcej</Link>
  </article>
);

export default PostCard;
