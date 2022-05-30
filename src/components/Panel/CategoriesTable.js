import React from 'react';
import { Table, Skeleton, Space, Image, Modal } from 'antd';
import {
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  collection,
} from 'firebase/firestore';
import { ref, deleteObject } from 'firebase/storage';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

import { useCategory } from '../../context/CategoryContext';
import { db, storage } from '../../firebase';
import UpdateCategoryForm from './UpdateCategoryForm';
const CategoriesTable = () => {
  const { categories, setUpdatedCategory, isVisibleModal, setIsVisibleModal } =
    useCategory();

  const deleteCategory = async (id, category) => {
    let posts = [];
    const categoryImageDeferRef = ref(
      storage,
      `categoriesBanner/${category.categoryImageName}`
    );
    deleteObject(categoryImageDeferRef)
      .then(async () => {
        const postQuery = query(
          collection(db, 'posts'),
          where('postCategoryID', '==', category.categoryId)
        );
        const querySnapshot = await getDocs(postQuery);
        querySnapshot.forEach((doc) => {
          posts.push({
            firebaseID: doc.id,
            imageName: doc.data().postImageName,
          });
        });
        posts.forEach(async (post) => {
          await deleteDoc(doc(db, 'posts', post.firebaseID));
          const postImageDeferRef = ref(
            storage,
            `postsCoverImages/${post.imageName}`
          );
          deleteObject(postImageDeferRef);
        });
      })
      .then(async () => {
        await deleteDoc(doc(db, 'categories', id));
      });
  };
  const handleUpdateCategory = async (id) => {
    const veri = await getDoc(doc(db, 'categories', id));
    setUpdatedCategory({ ...veri.data(), id });
    setIsVisibleModal(true);
  };
  const columns = [
    {
      title: 'Kategori İsmi',
      dataIndex: 'categoryName',
      key: 'categoryName',
      render: (categoryName) => <span>{categoryName}</span>,
    },

    {
      title: 'Kısa İsim',
      dataIndex: 'slug',
      key: 'slug',
    },
    {
      title: 'Açıklama',
      dataIndex: 'aciklama',
      key: 'aciklama',
    },
    {
      title: 'Kategori Resmi',
      key: 'categoryImage',
      dataIndex: 'categoryImage',
      render: (categoryImage) => (
        <>
          <Image
            width={70}
            height={40}
            src={categoryImage}
            className="rounded object-cover shadow-sm"
            placeholder={
              <Skeleton.Button active={true} size="default" shape="square" />
            }
          />
        </>
      ),
    },
    {
      title: 'İşlemler',
      key: 'islemler',
      dataIndex: 'key',
      render: (key, categoryId) => (
        <Space size="middle">
          <button
            className="text-green-700 font-semibold"
            onClick={() => handleUpdateCategory(key)}
          >
            <EditOutlined />
          </button>
          <button
            className="text-red-500 font-semibold"
            onClick={() => deleteCategory(key, categoryId)}
          >
            <DeleteOutlined />
          </button>
        </Space>
      ),
    },
  ];
  const data = categories.map((category) => {
    return {
      key: category.id,
      categoryId: category.categoryId,
      categoryName: category.categoryName,
      slug: category.categorySlug,
      aciklama: category.categoryDesc === '' ? '-' : category.categoryDesc,
      categoryImage: category.categoryImage,
      categoryImageName: category.categoryImageName,
    };
  });

  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 5 }}
        className="flex-1"
      />
      <Modal
        title="Kategoriyi Düzenle"
        visible={isVisibleModal}
        onCancel={() => setIsVisibleModal(false)}
        footer={null}
        destroyOnClose={true}
      >
        <UpdateCategoryForm className={'w-full'} />
      </Modal>
    </>
  );
};

export default CategoriesTable;
