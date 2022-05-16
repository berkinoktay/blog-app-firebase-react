import React from 'react';
import { RiArticleLine } from 'react-icons/ri';
import CategoryBanner from '../CategoryBanner';
import Sidebar from '../Sidebar';
import BlogHeader from './BlogHeader';
import BlogPostHorizontal from './BlogPostHorizontal';

const CategoryMain = () => {
  return (
    <main className="w-full pt-8 pb-16">
      <div className="max-w-7xl mx-auto">
        <CategoryBanner />
        <BlogHeader title={'Son Gönderiler'} icon={<RiArticleLine />} />
        <div className="flex items-start">
          <section className="flex flex-1 flex-col gap-x-7 gap-y-10">
            <BlogPostHorizontal />
            <BlogPostHorizontal />
            <BlogPostHorizontal />
            <BlogPostHorizontal />
            <BlogPostHorizontal />
            <BlogPostHorizontal />
          </section>
          <Sidebar />
        </div>
      </div>
    </main>
  );
};

export default CategoryMain;
