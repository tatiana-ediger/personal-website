import React from 'react';
import { Layout, Menu } from 'antd';
import { Footer } from 'antd/lib/layout/layout';

const { Header, Content } = Layout;

export default function Home() {
  return (
    <>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">Writing</Menu.Item>
            <Menu.Item key="3">Resume</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '50px' }}>
          <div className="site-layout-content">Hi! My name is Tatiana & this is my website :) </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>TODO</Footer>
      </Layout>
    </>
  );
}
