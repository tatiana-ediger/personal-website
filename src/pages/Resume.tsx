import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

export default function Resume() {
  return (
    <>
      <Content style={{ padding: '50px' }}>
        <div className="site-layout-content"> My resume will go here :) </div>
      </Content>
    </>
  );
}
