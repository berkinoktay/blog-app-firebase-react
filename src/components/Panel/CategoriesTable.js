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

import { useCategory } from '../../context/CategoryContext';
import { db } from '../../firebase';
import UpdateCategoryForm from './UpdateCategoryForm';
const CategoriesTable = () => {
  const { categories, setUpdatedCategory, isVisibleModal, setIsVisibleModal } =
    useCategory();
  const deleteCategory = async (id, category) => {
    let posts = [];
    await deleteDoc(doc(db, 'categories', id));
    const postQuery = query(
      collection(db, 'posts'),
      where('postCategoryID', '==', category.categoryId)
    );
    const querySnapshot = await getDocs(postQuery);
    querySnapshot.forEach((doc) => {
      posts.push({ firebaseID: doc.id });
    });
    console.log(posts);
    posts.forEach(async (post) => {
      await deleteDoc(doc(db, 'posts', post.firebaseID));
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
            Güncelle
          </button>
          <button
            className="text-red-500 font-semibold"
            onClick={() => deleteCategory(key, categoryId)}
          >
            Sil
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
    };
  });
  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
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
