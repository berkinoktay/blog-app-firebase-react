import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DetailSection from '../components/DetailSection';
import menu from './../db';
const PostDetail = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header menu={menu} />
      <DetailSection />
      <Footer />
    </div>
  );
};

export default PostDetail;
