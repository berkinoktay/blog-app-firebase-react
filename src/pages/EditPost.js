import React from 'react';
import PostCard from '../components/Panel/PostCard';
import { usePosts } from '../context/PostContext';
import { Row } from 'antd';
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
            title={post.postName}
            desc={post.postDesc}
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
