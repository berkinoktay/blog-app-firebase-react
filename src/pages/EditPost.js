import React from 'react';
import PostCard from '../components/Panel/PostCard';
import { usePosts } from '../context/PostContext';

const EditPost = () => {
  const { posts } = usePosts();
  return (
    <div className="grid grid-cols-4 gap-4 ">
      {posts.map((post) => (
        <PostCard
          key={post.firebaseID}
          img={post.postImage}
          title={post.postName}
          desc={post.postDesc}
        />
      ))}
    </div>
  );
};

export default EditPost;
