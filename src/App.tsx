/* eslint-disable */
import React from 'react';
import Home from './pages/Home';

import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import Writing from './pages/Writing';
import Resume from './pages/Resume';

export default function App() {
  return (
    <>
      <Router>
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/writing">Writing</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/resume">Resume</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/writing" element={<Writing />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
          {/* <Footer style={{ textAlign: 'center' }}>
            <MailOutlined /> tatiana.ediger@protonmail.com
          </Footer> */}
        </Layout>
      </Router>
    </>
  );
}
