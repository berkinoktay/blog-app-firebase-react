import React from 'react';
import { useParams } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const BlogPostHorizontal = ({
  postName,
  postDesc,
  postImage,
  postCategoryName,
  postCreatedTime,
  postSlug,
}) => {
  const { categorySlug } = useParams();
  return (
    <article className="group rounded overflow-hidden w-full grid grid-cols-2 items-center bg-white shadow">
      <a href={`/${categorySlug}/${postSlug}`}>
        <div className="relative overflow-hidden h-72">
          <div className="opacity-0 group-hover:opacity-50 absolute inset-0 w-full h-full bg-gray-900 z-10 transform transition-all ease-in duration-600 "></div>
          <LazyLoadImage
            src={postImage}
            width="100%"
            height="100%"
            className="group-hover:scale-110 object-cover transform !transition-all !duration-300"
            effect="blur"
          />
        </div>
      </a>

      <div className="px-10">
        <div className="capitalize text-sm text-red-500 mb-3">
          {postCategoryName}
        </div>
        <h4 className="text-xl font-medium">
          <a
            href={`/${categorySlug}/${postSlug}`}
            className="group-hover:text-red-500 line-clamp-2 text-black"
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
        <div className="mb-4">
          <p className="font-light text-sm text-gray-700 text-justify line-clamp-4">
            {postDesc}
          </p>
        </div>
        <div>
          <a
            href={`/${categorySlug}/${postSlug}`}
            className="uppercase text-xs font-semibold bg-red-500 hover:bg-red-400 !text-white  w-auto py-2 px-3 rounded transform transition-colors duration-300"
          >
            Devamını Oku
          </a>
        </div>
      </div>
    </article>
  );
};

export default BlogPostHorizontal;
