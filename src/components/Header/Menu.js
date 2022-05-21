import React from 'react';
import { Link } from 'react-router-dom';
const Menu = ({ name, slug }) => {
  return (
    <li>
      <Link
        to={`/${slug}`}
        className="py-4 px-5 text-black hover:text-red-500 transform transition-colors duration-200"
      >
        {name}
      </Link>
    </li>
  );
};

export default Menu;
