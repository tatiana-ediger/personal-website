import React from 'react';
import { Button } from 'antd';
import './App.css';

export default function App() {
  return (
    <>
      <h1>My React and TypeScript App!{new Date().toLocaleDateString()}</h1>
      <Button type="primary">Button</Button>
    </>
  );
}
