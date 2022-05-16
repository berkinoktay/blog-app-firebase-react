import React from 'react';

const Menu = ({ name }) => {
  return (
    <li>
      <a
        href="#"
        className="py-4 px-5 hover:text-red-500 transform transition-colors duration-200"
      >
        {name}
      </a>
    </li>
  );
};

export default Menu;
