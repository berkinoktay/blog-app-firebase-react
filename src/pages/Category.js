import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CategoryMain from '../components/Main/CategoryMain';
import menu from '../db';
const Category = () => {
  return (
    <>
      <Header menu={menu} />
      <CategoryMain />
      <Footer />
    </>
  );
};

export default Category;
