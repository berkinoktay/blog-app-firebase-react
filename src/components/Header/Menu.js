import React from 'react';
import { Link } from 'react-router-dom';
import { useCategory } from '../../context/CategoryContext';
const Menu = ({ name, slug }) => {
  const { setSelectedCategory } = useCategory();
  return (
    <li>
      <Link
        to={`/${slug}`}
        className="py-4 px-5 text-black hover:text-red-500 transform transition-colors duration-200"
        onClick={() => setSelectedCategory(name)}
      >
        {name}
      </Link>
    </li>
  );
};

export default Menu;
