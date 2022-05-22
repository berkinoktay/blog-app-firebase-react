import React from 'react';
import BlogPostGrid from './BlogPostGrid';
import { RiArticleLine } from 'react-icons/ri';
import BlogHeader from './BlogHeader';
import { usePosts } from '../../context/PostContext';
import NoData from '../NoData';
const Main = () => {
  const { posts } = usePosts();
  return (
    <main className="w-full pt-8 pb-16 flex-1">
      <div className="max-w-7xl mx-auto h-full">
        <BlogHeader title={'Son Gönderiler'} icon={<RiArticleLine />} />
        {!!posts.length || (
          <NoData
            title={'Yazı Bulunamadı!'}
            desc={'Üzgünüz, sistemde hiç yazı bulunamamıştır.'}
          />
        )}
        <section className="grid grid-cols-3 gap-x-7 gap-y-10">
          {!!posts.length
            ? posts.map((post) => <BlogPostGrid key={post.postId} {...post} />)
            : ''}
        </section>
      </div>
    </main>
  );
};

export default Main;
