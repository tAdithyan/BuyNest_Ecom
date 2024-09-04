import React from 'react';
import { Layout, Menu } from 'antd';
import { HomeOutlined, UserOutlined, ShopOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

const Slidebar = () => {
  return (
    <Sider width={256} className="site-layout-background">
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        items={[
          {
            key: '1',
            icon: <HomeOutlined />,
            label: <Link to='/Admin/Dashboard'>Home</Link>,
          },
          {
            key: '2',
            icon: <UserOutlined />,
            label: <Link to='/Admin/User'>Users</Link>,
          },
          {
            key: '3',
            icon: <ShopOutlined />,
            label: <Link to='/Admin/Products'>Products</Link>,
          },
        ]}
      />
    </Sider>
  );
};

export default Slidebar;
