import React from 'react';

import Logo from '../../assets/img/logo.png';

import { FiFacebook, FiLinkedin, FiTwitter, FiGithub } from 'react-icons/fi';
import Menu from './Menu';
import Socials from '../Socials';
import { Link } from 'react-router-dom';

const Header = ({ menu }) => {
  return (
    <header className="w-full py-4 bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Logo" className="max-w-full max-h-12" />
          </Link>
        </div>
        <ul className="flex items-center uppercase tracking-widest text-sm mx-auto">
          {menu.map((item, index) => (
            <Menu key={index} name={item.name} />
          ))}
        </ul>
        <ul className="flex items-center">
          <Socials icon={<FiFacebook />} />
          <Socials icon={<FiLinkedin />} />
          <Socials icon={<FiTwitter />} />
          <Socials icon={<FiGithub />} />
        </ul>
      </div>
    </header>
  );
};

export default Header;
