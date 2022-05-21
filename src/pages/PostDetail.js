import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DetailSection from '../components/DetailSection';
const PostDetail = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <DetailSection />
      <Footer />
    </div>
  );
};

export default PostDetail;
