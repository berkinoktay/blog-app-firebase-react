import React from 'react';
import { Link } from 'react-router-dom';
const Menu = ({ name }) => {
  return (
    <li>
      <Link
        to={`/category/${name.toLowerCase()}`}
        className="py-4 px-5 hover:text-red-500 transform transition-colors duration-200"
      >
        {name}
      </Link>
    </li>
  );
};

export default Menu;
