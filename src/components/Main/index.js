import React from 'react';
import BlogPostGrid from './BlogPostGrid';
import { RiArticleLine } from 'react-icons/ri';
import BlogHeader from './BlogHeader';
const Main = () => {
  return (
    <main className="w-full pt-8 pb-16">
      <div className="max-w-7xl mx-auto">
        <BlogHeader title={'Son Gönderiler'} icon={<RiArticleLine />} />
        <section className="grid grid-cols-3 gap-x-7 gap-y-10">
          <BlogPostGrid />
          <BlogPostGrid />
          <BlogPostGrid />
          <BlogPostGrid />
          <BlogPostGrid />
          <BlogPostGrid />
        </section>
      </div>
    </main>
  );
};

export default Main;
