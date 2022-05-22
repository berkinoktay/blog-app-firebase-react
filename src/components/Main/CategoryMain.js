import React, { useEffect, useState } from 'react';
import { RiArticleLine } from 'react-icons/ri';
import { useParams } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore';

import CategoryBanner from '../CategoryBanner';
import Sidebar from '../Sidebar';
import BlogHeader from './BlogHeader';
import BlogPostHorizontal from './BlogPostHorizontal';
import { db } from '../../firebase';
const CategoryMain = () => {
  const { categorySlug } = useParams();
  const [data, setData] = useState({ posts: [], category: {} });

  const getData = async () => {
    let category = {};
    let post = [];
    const q1 = query(
      collection(db, 'categories'),
      where('categorySlug', '==', categorySlug)
    );
    const querySnapshot = await getDocs(q1);
    querySnapshot.forEach((doc) => {
      category = { ...doc.data() };
    });
    const q2 = query(
      collection(db, 'posts'),
      where('postCategoryID', '==', category.categoryId)
    );
    const querySnapshot2 = await getDocs(q2);
    querySnapshot2.forEach((doc) => {
      post.push(doc.data());
    });
    setData({ posts: post, category });
  };
  useEffect(() => {
    getData();
  }, [categorySlug]);

  return (
    <main className="w-full pt-8 pb-16">
      <div className="max-w-7xl mx-auto">
        <CategoryBanner
          name={data.category.categoryName}
          banner={data.category.categoryImage}
        />
        <BlogHeader title={'Son Gönderiler'} icon={<RiArticleLine />} />
        <div className="flex items-start">
          <section className="flex flex-1 flex-col gap-y-6">
            {!!data.posts.length
              ? data.posts.map((post) => (
                  <BlogPostHorizontal key={post.postId} {...post} />
                ))
              : ''}
          </section>
          <Sidebar desc={data.category.categoryDesc} />
        </div>
      </div>
    </main>
  );
};

export default CategoryMain;
