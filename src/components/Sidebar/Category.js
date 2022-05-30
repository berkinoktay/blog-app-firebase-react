import React from 'react';
import { Link } from 'react-router-dom';
import { useCategory } from '../../context/CategoryContext';

const Category = () => {
  const { categories } = useCategory();
  return (
    <div className="mt-8">
      <div className="my-4 font-medium uppercase tracking-wider before:content-['•'] before:mr-2">
        KATEGORİLER
      </div>
      <ul>
        {categories.map((item) => (
          <li
            key={item.categoryId}
            className="mb-3 pb-1 border-b-2 border-gray-300"
          >
            <Link
              to={`/${item.categorySlug}`}
              className="flex items-center text-gray-600 hover:text-red-500 transform transition-colors"
            >
              <span>{item.categoryName}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
