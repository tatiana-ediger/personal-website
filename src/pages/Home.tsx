import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

export default function Home() {
  return (
    <>
      <Content style={{ padding: '50px' }}>
        <div className="site-layout-content">Hi! My name is Tatiana & this is my website :) </div>
      </Content>
    </>
  );
}
