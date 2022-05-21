import React from 'react';
import { Table, Skeleton, Space, Image } from 'antd';
import { useCategory } from '../../context/CategoryContext';

const CategoriesTable = () => {
  const { categories } = useCategory();

  const columns = [
    {
      title: 'Kategori İsmi',
      dataIndex: 'categoryName',
      key: 'categoryName',
      render: (text) => <span>{text}</span>,
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
            className="rounded object-cover"
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
      render: () => (
        <Space size="middle">
          <button className="text-green-700 font-semibold">Güncelle</button>
          <button className="text-red-500 font-semibold">Sil</button>
        </Space>
      ),
    },
  ];
  const data = categories.map((category) => {
    return {
      key: category.categoryId,
      categoryName: category.categoryName,
      slug: category.categorySlug,
      aciklama: category.categoryDesc,
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
        loading={categories.length === 0}
      />
    </>
  );
};

export default CategoriesTable;
