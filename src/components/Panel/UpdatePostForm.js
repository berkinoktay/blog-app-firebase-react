import React, { useState } from 'react';
import { Form, Input, Button, message, Upload, Progress, Select } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage';
import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
} from 'firebase/firestore';

import { storage, db } from '../../firebase';
import { slugify } from '../../constants';
import { useCategory } from '../../context/CategoryContext';

const { TextArea } = Input;
const { Option } = Select;
const UpdatePostForm = ({ updatedPost, setIsVisibleModal }) => {
  const [uploadFile, setUploadFile] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [progress, setProgress] = useState(0);

  const [form] = Form.useForm();
  const { categories } = useCategory();

  const onFinish = async (values) => {
    let categoryDetail = {};
    setSubmitting(true);
    const postImageRef = ref(
      storage,
      `postsCoverImages/${updatedPost.postImageName}`
    );
    const getCategoryDetails = query(
      collection(db, 'categories'),
      where('categoryId', '==', values.categoryID)
    );
    const querySnapshot = await getDocs(getCategoryDetails);
    querySnapshot.forEach((doc) => {
      categoryDetail = { ...doc.data() };
    });

    if (Object.keys(uploadFile).length > 0) {
      deleteObject(postImageRef).then(async () => {
        const imageRef = ref(storage, `postsCoverImages/${uploadFile.uid}`);
        const uploadImage = uploadBytesResumable(imageRef, uploadFile);
        uploadImage.on(
          'state_changed',
          (snapshot) => {
            const progressPercent = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(progressPercent);
          },
          (err) => {
            console.log(err);
          },
          async () => {
            await getDownloadURL(uploadImage.snapshot.ref)
              .then(async (url) => {
                //   const categoryName = categoryDetail.categoryName;
                const data = {
                  postName: values.title,
                  postSlug: values.slug,
                  postDesc: values.detail,
                  postImage: url,
                  postCategoryID: values.categoryID,
                  postCategoryName: categoryDetail.categoryName,
                };
                await updateDoc(doc(db, 'posts', updatedPost.firebaseID), data);
              })
              .then(() => {
                setSubmitting(false);
                form.resetFields();
                setIsVisibleModal(false);
                message.success('Yazı başarılı bir şekilde güncellendi.');
                setProgress(0);
              })

              .catch((err) => {
                setSubmitting(false);
                console.log(err);
                message.error('Yazı güncellenirken bir hata oluştu.');
              });
          }
        );
      });
    } else {
      try {
        const data = {
          postName: values.title,
          postSlug: values.slug,
          postDesc: values.detail,
          postCategoryID: values.categoryID,
          postCategoryName: categoryDetail.categoryName,
          postImage: updatedPost.postImage,
        };
        await updateDoc(doc(db, 'posts', updatedPost.firebaseID), data);
        setSubmitting(false);
        form.resetFields();
        setIsVisibleModal(false);
        message.success('Yazı başarılı bir şekilde güncellendi.');
      } catch (err) {
        setSubmitting(false);
        console.log(err);
        message.error('Yazı güncellenirken bir hata oluştu.');
      }
    }
  };
  const beforeUpload = (file) => {
    if (!['image/jpeg', 'image/png'].includes(file.type)) {
      message.error(`${file.name} geçersiz resim dosyası.`, 2);
      return null;
    }
    setUploadFile(file);
    return false;
  };

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };
  const categoryNameChange = (e) => {
    form.setFieldsValue({ slug: slugify(e.target.value) }); // slug'ın değerini değiştiriyoruz.
  };
  return (
    <Form
      name="nest-messages"
      onFinish={onFinish}
      layout="vertical"
      form={form}
      initialValues={{
        title: updatedPost.postName || '',
        slug: updatedPost.postSlug || '',
        detail: updatedPost.postDesc || '',
        categoryID: updatedPost.postCategoryID || '',
      }}
    >
      <Form.Item
        name="title"
        label="Yazı Başlığı"
        rules={[
          {
            required: true,
            message: 'Lütfen yazı başlığını giriniz.',
          },
        ]}
      >
        <Input
          placeholder="Yazı başlığını giriniz.."
          showCount
          maxLength={75}
          onChange={categoryNameChange}
        />
      </Form.Item>
      <Form.Item
        name="slug"
        label="Kısa İsim"
        rules={[
          {
            required: true,
            message: 'Kısa isim boş bırakılamaz!.',
          },
        ]}
        extra={
          <span className="mt-5">
            "Kısa İsim" yazı başlığının URL versiyonudur. Genellikle tümü küçük
            harflerden oluşur, sadece harf, rakam ve tire içerir.
          </span>
        }
      >
        <Input
          placeholder="Yazı başlığının kısa ismini giriniz.."
          showCount
          maxLength={75}
        />
      </Form.Item>
      <Form.Item
        name="categoryID"
        label="Kategori"
        rules={[
          {
            required: true,
            message: 'Kategori boş bırakılamaz!.',
          },
        ]}
        extra={
          <span className="mt-5">
            Yazınızın yayınlanmasını istediğiniz kategori başlığını seçiniz..
          </span>
        }
      >
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Kategori seçiniz.."
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          filterSort={(optionA, optionB) =>
            optionA.children
              .toLowerCase()
              .localeCompare(optionB.children.toLowerCase())
          }
        >
          {categories.map((category) => (
            <Option key={category.categoryId} value={category.categoryId}>
              {category.categoryName}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        name="detail"
        label="Yazı Detayı"
        rules={[
          {
            required: true,
            message: 'Lütfen bir resim seçiniz.',
          },
        ]}
      >
        <TextArea
          placeholder="Yazı detayını giriniz.."
          showCount
          autoSize={{ minRows: 10, maxRows: 20 }}
        />
      </Form.Item>
      <Form.Item
        name="uploadedImage"
        label="Öne Çıkarılacak Resim"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        extra="Yazınızda öne çıkan resmi yüklemek için tıklayınız."
      >
        <Upload
          name="banner"
          listType="picture"
          maxCount={1}
          beforeUpload={beforeUpload}
        >
          <Button icon={<UploadOutlined />}>Resim Seç</Button>
        </Upload>
      </Form.Item>
      {progress === 0 ? null : (
        <Form.Item extra="Resim yükleniyor..">
          <div style={{ width: 340 }}>
            <Progress
              percent={progress}
              size="small"
              status="active"
              strokeWidth={12}
            />
          </div>
        </Form.Item>
      )}

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={submitting}>
          Yazıyı Güncelle
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UpdatePostForm;
