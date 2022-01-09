import React from 'react';
import { Image, Layout } from 'antd';
import prof_pic from '../images/prof_pic_casual.jpg';

const { Content } = Layout;

export default function Home() {
  return (
    <>
      <Content style={{ padding: '50px', textAlign: 'center' }}>
        <div className="site-layout-content">
          <Image width={200} src={prof_pic} />
          <h2>Hi! I&apos;m Tatiana Ediger</h2>
          Welcome to my website! I am a software engineer and data scientist, passionate about math,
          teaching and data privacy. I like to climb, spend time outside, write and think about
          thinking.
          <br />
          <br /> If you&apos;re looking at my website, I probably want to hear from you. You can
          email me at tatiana.ediger@protonmail.com.
        </div>
      </Content>
    </>
  );
}
