import React from 'react';

const CategoryBanner = ({ name, banner }) => {
  return (
    <div
      className="relative rounded h-80 bg-no-repeat  background-cover bg-center flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="absolute bg-black opacity-50 inset-0 w-full h-full"></div>
      <h1 className="text-5xl uppercase font-semibold text-center z-10 text-white">
        {name}
      </h1>
    </div>
  );
};

export default CategoryBanner;
