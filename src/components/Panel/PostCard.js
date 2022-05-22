import React from 'react';
import { Card, Avatar, Image, Skeleton, Col } from 'antd';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';

const { Meta } = Card;

const PostCard = ({ img, title, desc }) => {
  return (
    <Col span={6}>
      <Card
        cover={<Image src={img} className="min-h-[200px] object-cover"></Image>}
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
        loading={desc ? false : true}
        className="overflow-hidden"
      >
        <div className="font-semibold line-clamp-1 text-sm">
          <a href="#/" className="text-black underline">
            {title}
          </a>
        </div>
        <div className="line-clamp-6">{desc}</div>
      </Card>
    </Col>
  );
};

export default PostCard;
