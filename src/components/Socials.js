import React from 'react';

const Socials = ({ icon }) => {
  return (
    <li className="mr-5 ">
      <a
        href="#/"
        className="text-lg text-black hover:text-red-500 transform transition-colors duration-300"
      >
        {icon}
      </a>
    </li>
  );
};

export default Socials;
