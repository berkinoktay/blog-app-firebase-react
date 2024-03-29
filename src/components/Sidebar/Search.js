import React, { useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';

const Search = () => {
  const [search, setSearch] = useState('');
  return (
    <div className="relative flex items-center">
      <input
        className="outline-none border-b-2 bg-transparent border-gray-300 w-full py-2 pr-9 focus:border-gray-500 transform transition-all"
        type="text"
        placeholder="Yazı arayınız.."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <BiSearchAlt className="cursor-pointer text-xl text-gray-500 searchIcon absolute right-2" />
    </div>
  );
};

export default Search;
