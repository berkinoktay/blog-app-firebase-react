import React, { useState } from 'react';
import { Form, Input, Button, message, Upload, Progress, Select } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { v4 as uuidv4 } from 'uuid';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

import { storage, db } from '../../firebase';
import { slugify } from '../../constants/';
import { useCategory } from '../../context/CategoryContext';

const { TextArea } = Input;
const { Option } = Select;

const AddPostForm = () => {
  const [uploadFile, setUploadFile] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [progress, setProgress] = useState(0);

  const [form] = Form.useForm();
  const { categories } = useCategory();
  const onFinish = async (values) => {
    console.log(values);
    setSubmitting(true);
    const imageRef = ref(
      storage,
      `postsCoverImages/${uploadFile.uid}-${Date.now()}`
    );
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
          .then((url) => {
            addDoc(collection(db, 'posts'), {
              postId: uuidv4(),
              postName: values.title,
              postSlug: values.slug,
              postDesc: values.detail,
              postCategoryID: values.categoryID,
              timestamp: serverTimestamp(),
              postImage: url,
            });
            setSubmitting(false);
            form.resetFields();
            message.success('Yazı başarılı bir şekilde eklendi.');
            setProgress(0);
          })

          .catch((err) => {
            setSubmitting(false);
            console.log(err);
            message.error('Yazı eklenirken bir hata oluştu.');
          });
      }
    );
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
      <Form.Item name="detail" label="Yazı Detayı">
        <TextArea
          placeholder="Yazı detayını giriniz.."
          showCount
          autoSize={{ minRows: 15, maxRows: 50 }}
        />
      </Form.Item>
      <Form.Item
        name="uploadedImage"
        label="Öne Çıkarılacak Resim"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        extra="Yazınızda öne çıkan resmi yüklemek için tıklayınız."
        rules={[
          {
            required: true,
            message: 'Lütfen bir resim seçiniz.',
          },
        ]}
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
          Kategori Ekle
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddPostForm;
