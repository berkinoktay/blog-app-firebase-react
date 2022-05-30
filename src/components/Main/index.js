import React from 'react';
import { RiArticleLine } from 'react-icons/ri';
import { Skeleton } from 'antd';

import BlogPostGrid from './BlogPostGrid';
import BlogHeader from './BlogHeader';
import { usePosts } from '../../context/PostContext';

const Main = () => {
  const { posts, loading } = usePosts();
  return (
    <main className="w-full pt-8 pb-16 flex-1">
      <div className="max-w-7xl mx-auto h-full">
        <BlogHeader title={'Son Gönderiler'} icon={<RiArticleLine />} />
        <section className="grid grid-cols-3 gap-x-7 gap-y-10">
          <Skeleton active loading={loading} paragraph={{ rows: 5 }}>
            {posts.map((post) => (
              <BlogPostGrid key={post.postId} {...post} />
            ))}
          </Skeleton>
        </section>
      </div>
    </main>
  );
};

export default Main;
