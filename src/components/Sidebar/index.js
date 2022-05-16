import React from 'react';
import Category from './Category';
import Search from './Search';
const Sidebar = () => {
  return (
    <div className="w-80 flex flex-col ml-6 bg-white rounded shadow px-4 py-3">
      <Search />
      <Category />
    </div>
  );
};

export default Sidebar;
