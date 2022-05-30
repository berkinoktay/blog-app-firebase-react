import React, { useState } from 'react';
import { Card, Image, Col, Modal } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { deleteDoc, doc, getDoc } from 'firebase/firestore';
import { ref, deleteObject } from 'firebase/storage';

import { db, storage } from '../../firebase';
import UpdatePostForm from './UpdatePostForm';

const PostCard = ({
  img,
  imgName,
  title,
  desc,
  firebaseID,
  slug,
  categoryName,
}) => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [updatedPost, setUpdatedPost] = useState({});

  const deletePost = async (id, imgName) => {
    const postImageRef = ref(storage, `postsCoverImages/${imgName}`);
    deleteObject(postImageRef).then(async () => {
      await deleteDoc(doc(db, 'posts', id));
    });
  };
  const updatePost = async (id) => {
    const veri = await getDoc(doc(db, 'posts', id));
    setUpdatedPost({ ...veri.data(), firebaseID: id });
    setIsVisibleModal(true);
  };
  return (
    <>
      <Col span={6}>
        <Card
          cover={
            <Image src={img} className="min-h-[200px] object-cover"></Image>
          }
          actions={[
            <EditOutlined key="edit" onClick={() => updatePost(firebaseID)} />,
            <DeleteOutlined
              key="delete"
              onClick={() => deletePost(firebaseID, imgName)}
            />,
          ]}
          loading={desc ? false : true}
          className="overflow-hidden"
        >
          <div className="font-semibold line-clamp-1 text-sm">
            <a
              href={`/${categoryName}/${slug}`}
              className="text-black underline"
            >
              {title}
            </a>
          </div>
          <div className="line-clamp-6">{desc}</div>
        </Card>
      </Col>
      <Modal
        title="Kategoriyi Düzenle"
        visible={isVisibleModal}
        onCancel={() => setIsVisibleModal(false)}
        footer={null}
        destroyOnClose={true}
      >
        <UpdatePostForm
          className="w-full"
          updatedPost={updatedPost}
          setIsVisibleModal={setIsVisibleModal}
        />
      </Modal>
    </>
  );
};

export default PostCard;
