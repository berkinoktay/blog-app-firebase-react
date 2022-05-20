import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

import menu from '../db';
const Home = () => {
  return (
    <>
      <Header menu={menu} />
      <Main />
      <Footer />
    </>
  );
};

export default Home;
