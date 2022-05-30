import { useState } from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { DesktopOutlined, PieChartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import Logo from '../assets/img/logo-white.png';
const Panel = ({ children, breadcrumb }) => {
  const { Content, Footer, Sider } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }

  const items = [
    // getItem(
    //   <Link to="/panel">Tüm Yazılar</Link>,
    //   '/panel',
    //   <PieChartOutlined />
    // ),
    getItem(
      <Link to="/panel">Yazı Yönetimi</Link>,
      '/panel',
      <DesktopOutlined />
    ),
    getItem(
      <Link to="/panel/yazi-ekle">Yazı Ekle</Link>,
      '/panel/yazi-ekle',
      <PieChartOutlined />
    ),

    getItem(
      <Link to="/panel/kategori-yonetimi">Kategori Yönetimi</Link>,
      '/panel/kategori-yonetimi',
      <DesktopOutlined />
    ),
  ];
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'sticky',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="flex items-center justify-center py-3">
          <img src={Logo} alt="" className="max-w-full max-h-12" />
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={['/panel']}
          selectedKeys={[window.location.pathname]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>Panel</Breadcrumb.Item>
            <Breadcrumb.Item>{breadcrumb}</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            {children}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Modern Blog ©2022 Berkin Oktay Tarafından Yapılmıştır.
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Panel;
