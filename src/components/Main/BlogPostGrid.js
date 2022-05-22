import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { slugify } from '../../constants';
const BlogPostGrid = ({
  postCategoryName,
  postImage,
  postName,
  postDesc,
  postCreatedTime,
  postSlug,
}) => {
  return (
    <article className="group flex flex-col bg-white rounded shadow overflow-hidden">
      <a href={`/${slugify(postCategoryName)}/${postSlug}`}>
        <div className="relative overflow-hidden">
          <div className="opacity-0 group-hover:opacity-50 absolute inset-0 w-full h-full bg-gray-900 z-10 transform transition-all ease-in duration-600 "></div>
          <LazyLoadImage
            src={postImage}
            width="100%"
            height={250}
            className="group-hover:scale-110 object-cover transform !transition-all !duration-300"
            effect="blur"
          />

          <div className="absolute z-20 top-4 left-4 bg-white py-1 px-4 capitalize text-sm shadow rounded">
            {postCategoryName}
          </div>
        </div>
      </a>

      <div className="px-4 py-6 flex flex-col flex-1">
        <h4 className="text-xl font-medium">
          <a
            href={`/${slugify(postCategoryName)}/${postSlug}`}
            className="group-hover:text-red-500 line-clamp-2"
          >
            {postName}
          </a>
        </h4>
        <div className="my-3 text-xs text-gray-700 flex items-center ">
          <span className='after:content-["·"] after:mx-2'>
            Yazar: <strong>Berkin Oktay</strong>
          </span>
          <span>
            {new Date(postCreatedTime.seconds * 1000).toLocaleDateString(
              'tr-TR',
              {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              }
            )}
          </span>
        </div>
        <div className="mb-4 flex-1">
          <p className="font-light text-sm text-gray-700 text-justify line-clamp-4">
            {postDesc}
          </p>
        </div>
        <div className="mt-auto">
          <a
            href={`/${slugify(postCategoryName)}/${postSlug}`}
            className="uppercase text-xs font-semibold bg-red-500 hover:bg-red-400 text-white w-auto py-2 px-3 rounded transform transition-colors duration-300"
          >
            Devamını Oku
          </a>
        </div>
      </div>
    </article>
  );
};

export default BlogPostGrid;
