import React from 'react';
import { Result } from 'antd';
import 'antd/dist/antd.css';

const NoData = ({ title, desc }) => {
  return <Result status="404" title={title} subTitle={desc} />;
};

export default NoData;
