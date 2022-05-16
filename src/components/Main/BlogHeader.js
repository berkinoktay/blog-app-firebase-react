import React from 'react';

const BlogHeader = ({ title, icon }) => {
  return (
    <h2 className=" flex items-center text-3xl font-bold gap-3 my-8">
      <span className="w-12 h-12 rounded bg-gray-100  text-red-500 flex items-center justify-center text-4xl">
        {icon}
      </span>
      {title}
    </h2>
  );
};

export default BlogHeader;
