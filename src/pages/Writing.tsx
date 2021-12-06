import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

export default function Writing() {
  return (
    <>
      <Content style={{ padding: '50px' }}>
        <div className="site-layout-content">My writing will go here! </div>
      </Content>
    </>
  );
}
