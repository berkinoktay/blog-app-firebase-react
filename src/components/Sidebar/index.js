import React from 'react';
import Category from './Category';
import Search from './Search';
const Sidebar = () => {
  return (
    <div className="w-60 flex flex-col">
      <Search />
      <Category />
    </div>
  );
};

export default Sidebar;
