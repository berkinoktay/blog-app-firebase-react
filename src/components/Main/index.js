import React from 'react';
import BlogPost from './BlogPost';

const Main = () => {
  return (
    <main className="w-full pt-8 pb-16">
      <div className="max-w-7xl mx-auto">
        <section className="grid grid-cols-3 gap-x-7 gap-y-10">
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
        </section>
      </div>
    </main>
  );
};

export default Main;
