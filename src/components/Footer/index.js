import React from 'react';
import Socials from '../Socials';
import { FiFacebook, FiLinkedin, FiTwitter, FiGithub } from 'react-icons/fi';

const index = () => {
  return (
    <footer className="w-full bg-slate-900 text-white py-5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <span>
          © 2020 Copyright{' '}
          <strong className="text-red-500">Berkin Oktay</strong> . Tüm Hakları
          Saklıdır
        </span>
        <ul className="socials flex items-center">
          <Socials icon={<FiFacebook />} />
          <Socials icon={<FiLinkedin />} />
          <Socials icon={<FiTwitter />} />
          <Socials icon={<FiGithub />} />
        </ul>
      </div>
    </footer>
  );
};

export default index;
