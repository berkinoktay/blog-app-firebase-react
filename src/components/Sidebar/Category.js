import React from 'react';
import { Link } from 'react-router-dom';
import menu from '../../db';
const Category = () => {
  return (
    <div className="mt-8">
      <div className="my-4 font-medium uppercase tracking-wider before:content-['•'] before:mr-2">
        KATEGORİLER
      </div>
      <ul>
        {menu.map((item, index) => (
          <li key={index} className="mb-3 pb-1 border-b-2 border-gray-300">
            <Link
              to={`/${item.name.toLowerCase()}`}
              className="flex items-center justify-between text-gray-600 hover:text-red-500 transform transition-colors"
            >
              <span>{item.name}</span> <span className="text-xs">(12)</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
