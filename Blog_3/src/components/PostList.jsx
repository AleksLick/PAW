import React from 'react';
import PostCard from './PostCard';

const PostList = ({ posts }) => {
  return (
    <section className="post-list">
      {posts.length > 0 ? (
        posts.map((post) => <PostCard key={post.id} post={post} />)
      ) : (
        <p>Brak postów do wyświetlenia.</p>
      )}
    </section>
  );
};

export default PostList;
