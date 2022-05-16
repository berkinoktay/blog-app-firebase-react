import React from 'react';

import Logo from '../../assets/img/logo.png';

import { FiFacebook, FiLinkedin, FiTwitter, FiGithub } from 'react-icons/fi';
import Menu from './Menu';
import Socials from '../Socials';
const Header = () => {
  return (
    <header className="w-full py-4 bg-white">
      <div className="max-w-7xl mx-auto flex items-center">
        <div className="logo">
          <img src={Logo} alt="Logo" className="max-w-full max-h-12" />
        </div>
        <ul className="flex items-center uppercase tracking-widest text-sm mx-auto">
          <Menu name={'Travel'} />
          <Menu name={'Hotels'} />
          <Menu name={'Flights'} />
          <Menu name={'Cars'} />
          <Menu name={'Cruises'} />
          <Menu name={'Travel'} />
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
