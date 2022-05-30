import React from 'react';

import Logo from '../../assets/img/logo-black.png';

import { FiFacebook, FiLinkedin, FiTwitter, FiGithub } from 'react-icons/fi';
import Menu from './Menu';
import Socials from '../Socials';
import { Link } from 'react-router-dom';
import { useCategory } from '../../context/CategoryContext';

const Header = () => {
  const { categories } = useCategory();
  return (
    <header className="w-full py-2 bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center">
        <div>
          <Link to="/">
            <img src={Logo} alt="Logo" className="max-w-full max-h-12" />
          </Link>
        </div>
        <ul className="flex items-center uppercase tracking-widest text-sm mx-auto my-0">
          {!!categories.length
            ? categories.map((item) => (
                <Menu
                  key={item.categoryId}
                  name={item.categoryName}
                  slug={item.categorySlug}
                />
              ))
            : 'KATEGORİ YOK.'}
        </ul>
        <ul className="flex items-center m-0">
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
