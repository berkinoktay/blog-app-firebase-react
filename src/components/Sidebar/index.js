import React from 'react';
import Category from './Category';
import Search from './Search';
const Sidebar = ({ desc }) => {
  return (
    <div className="w-80 flex flex-col ml-6 bg-white rounded shadow px-4 py-3">
      <Search />
      <div className="mt-4">
        <div className="my-4 font-medium uppercase tracking-wider before:content-['•'] before:mr-2">
          KATEGORİ AÇIKLAMASI
        </div>
        <p className="text-gray-600 text-sm">{desc}</p>
      </div>
      <Category />
    </div>
  );
};

export default Sidebar;
