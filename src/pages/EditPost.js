import React from 'react';
import { Row } from 'antd';

import { slugify } from '../constants';
import PostCard from '../components/Panel/PostCard';
import { usePosts } from '../context/PostContext';
import NoData from '../components/NoData';

const EditPost = () => {
  const { posts } = usePosts();
  return (
    <Row align="top" gutter={[16, 16]}>
      {!!posts.length ? (
        posts.map((post) => (
          <PostCard
            key={post.firebaseID}
            img={post.postImage}
            imgName={post.postImageName}
            title={post.postName}
            desc={post.postDesc}
            firebaseID={post.firebaseID}
            slug={post.postSlug}
            categoryName={slugify(post.postCategoryName)}
          />
        ))
      ) : (
        <div className="mx-auto">
          <NoData
            title={'Yazı Bulunamadı!'}
            desc={'Üzgünüz, sistemde hiç yazı bulunamamıştır.'}
          />
        </div>
      )}
    </Row>
  );
};

export default EditPost;
