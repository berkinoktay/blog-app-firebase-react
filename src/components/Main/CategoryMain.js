import React, { useEffect, useState } from 'react';
import { RiArticleLine } from 'react-icons/ri';
import { useParams } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore';
import ContentLoader from 'react-content-loader';

import CategoryBanner from '../CategoryBanner';
import Sidebar from '../Sidebar';
import BlogHeader from './BlogHeader';
import BlogPostHorizontal from './BlogPostHorizontal';
import { db } from '../../firebase';
const CategoryMain = () => {
  const { categorySlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({ posts: [], category: {} });

  useEffect(() => {
    setTimeout(async () => {
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
      setLoading(false);
    }, 100);
  }, [categorySlug]);

  return (
    <main className="w-full pt-8 pb-16">
      <div className="max-w-7xl mx-auto">
        {!loading ? (
          <CategoryBanner
            name={data.category.categoryName}
            banner={data.category.categoryImage}
          />
        ) : (
          <ContentLoader
            speed={2}
            backgroundColor="#f0f0f0"
            foregroundColor="#e3e3e3"
            style={{ width: '100%', height: '320px' }}
          >
            <rect x="7" y="11" rx="10" ry="10" width="100%" height="320px" />
          </ContentLoader>
        )}

        <BlogHeader title={'Son Gönderiler'} icon={<RiArticleLine />} />
        <div className="flex items-start">
          <section className="flex flex-1 flex-col gap-y-6">
            {!loading &&
              data.posts.map((post) => (
                <BlogPostHorizontal key={post.postId} {...post} />
              ))}
          </section>
          <Sidebar desc={data.category.categoryDesc} />
        </div>
      </div>
    </main>
  );
};

export default CategoryMain;
