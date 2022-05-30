import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { Form, Input, Button, message, Upload, Progress } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import { slugify } from '../../constants';
import { storage, db } from '../../firebase';

const AddCategoryForm = ({ className }) => {
  const [uploadFile, setUploadFile] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [progress, setProgress] = useState(0);

  const [form] = Form.useForm();
  const { TextArea } = Input;

  const onFinish = async (values) => {
    setSubmitting(true);
    const uniqueImageName = `${uploadFile.uid}`;
    const imageRef = ref(storage, `categoriesBanner/${uniqueImageName}`);
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
            addDoc(collection(db, 'categories'), {
              categoryId: uuidv4(),
              categoryName: values.name,
              categorySlug: values.slug,
              categoryDesc: values.aciklama || '',
              timestamp: serverTimestamp(),
              categoryImage: url,
              categoryImageName: uniqueImageName,
            });
          })
          .then(() => {
            form.resetFields();
            setSubmitting(false);
            message.success('Kategori başarılı bir şekilde eklendi.');
            setProgress(0);
          })
          .catch((err) => {
            setSubmitting(false);
            console.log(err);
            message.error('Kategori eklenirken bir hata oluştu.');
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
      className={className}
    >
      <Form.Item
        name="name"
        label="Kategori İsmi"
        rules={[
          {
            required: true,
            message: 'Lütfen kategori ismini giriniz.',
          },
        ]}
      >
        <Input
          placeholder="Kategori ismini giriniz.."
          showCount
          maxLength={20}
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
            "Kısa İsim" kategori isminin URL versiyonudur. Genellikle tümü küçük
            harflerden oluşur, sadece harf, rakam ve tire içerir.
          </span>
        }
      >
        <Input
          placeholder="Kategori kısa ismi giriniz.."
          showCount
          maxLength={20}
        />
      </Form.Item>

      <Form.Item name="aciklama" label="Açıklama">
        <TextArea
          placeholder="Kategori açıklamasını giriniz.."
          showCount
          maxLength={300}
          autoSize={{ minRows: 3, maxRows: 5 }}
        />
      </Form.Item>
      <Form.Item
        name="Kategori Resmi"
        label="Kategori Resmi"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        extra="Kategori sayfasında gözükmesini istediğiniz resmi yüklemek için tıklayınız."
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

export default AddCategoryForm;
