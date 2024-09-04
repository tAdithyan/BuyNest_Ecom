// src/Admin/Components/Admin_dashboard.js
import React from 'react';
import { Layout } from 'antd';
import Sidebar from '../Componets/Slidebar';
import { Outlet } from 'react-router-dom';

const { Content } = Layout;

const Admin_Layout = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>

      <Sidebar />
      <Layout style={{ marginLeft: 256 }}>
        <Content style={{ padding: '24px', margin: 0, minHeight: 280 }}>
          {/* Nested routes will be rendered here */}
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Admin_Layout;
