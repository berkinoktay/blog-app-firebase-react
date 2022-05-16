import React from 'react';

const Socials = ({ icon }) => {
  return (
    <li className="mr-5 text-lg hover:text-red-500 transform transition-colors duration-300">
      <a href="#">{icon}</a>
    </li>
  );
};

export default Socials;
