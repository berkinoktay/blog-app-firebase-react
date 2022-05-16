import React from 'react';

const BlogPostGrid = () => {
  return (
    <article className="group bg-white rounded shadow">
      <a href="#/">
        <div className="relative overflow-hidden">
          <div className="opacity-0 group-hover:opacity-50 absolute inset-0 w-full h-full bg-gray-900 z-10 transform transition-all ease-in duration-600 "></div>
          <img
            src="https://api.noudeveloper.com/uploads/thumb_19_af7ee7e31a.jpg"
            alt=""
            className="group-hover:scale-110 object-cover transform ease-in duration-300"
          />
          <div className="absolute z-20 top-4 left-4 bg-white py-1 px-4 capitalize text-sm">
            Travel
          </div>
        </div>
      </a>

      <div className="px-4 py-6">
        <h4 className="text-xl font-mediumAFEFE">
          <a href="#/" className="group-hover:text-red-500">
            Read This To Change How You Mind
          </a>
        </h4>
        <div className="my-3 text-xs text-gray-700 flex items-center ">
          <span className='after:content-["·"] after:mx-2'>
            Yazar: <strong>Berkin Oktay</strong>
          </span>
          <span>MAR 23, 2021</span>
        </div>
        <div className="mb-4">
          <p className="font-light text-sm text-gray-700 text-justify line-clamp-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            enim sed doloremque accusamus adipisci unde. Modi earum repellat
            laboriosam labore dignissimos voluptatibus atque similique magni
            quod. Officiis delectus dolore explicabo? Adipisci dolores, nemo,
            consectetur laboriosam deleniti possimus nam officiis delectus
            iusto, tempora pariatur ullam suscipit reprehenderit numquam
            explicabo sequi commodi optio? Sint excepturi, blanditiis itaque
            velit repellendus aperiam perspiciatis asperiores.
          </p>
        </div>
        <div>
          <a
            href="#/"
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
