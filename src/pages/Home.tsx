import React from 'react';
import { Card, Col, Image, Layout, Row } from 'antd';
import Meta from 'antd/lib/card/Meta';

import prof_pic from '../images/prof_2022.jpg';
import oreilly_logo from '../images/oreilly-logo.jpeg';
import whoop_logo from '../images/whoop-logo.png';
import poweradvocate_logo from '../images/poweradvocatelogo.png';
import khoury_logo from '../images/khoury-logo.png';

const { Content } = Layout;

export default function Home() {
  return (
    <>
      <Content style={{ padding: '50px', textAlign: 'center' }}>
        <div className="site-layout-content">
          <Image width={200} src={prof_pic} />
          <h2>Hi! I&apos;m Tatiana Ediger</h2>
          Welcome to my website! I am a software engineer and data scientist, passionate about math,
          teaching and data privacy. If you&apos;re interested in looking at code I&apos;ve written,
          you can check it out
          <a href={'https://github.com/tatiana-ediger?tab=repositories'}> here</a>. I like to climb,
          spend time outside, write, and think about thinking.
          <br />
          <br /> If you&apos;re looking at my website, I probably want to hear from you. You can
          email me at tatiana.ediger@protonmail.com.
          <br />
          <div className="site-card-wrapper">
            <Row justify="space-between" itemType="flex">
              <Col>
                <Card
                  hoverable
                  cover={<img alt="O'Reilly" src={oreilly_logo} />}
                  style={{ width: 240, height: 240 }}
                >
                  <Meta title="O'Reilly Media" description="Course Designer &amp; Teacher" />
                </Card>
              </Col>
              <Col>
                <Card
                  hoverable
                  cover={<img alt="WHOOP" src={whoop_logo} />}
                  style={{ width: 240, height: 240 }}
                >
                  <Meta title="WHOOP" description="Software Engineer &amp; Data Scientist" />
                </Card>
              </Col>
              <Col>
                <Card
                  hoverable
                  cover={
                    <img
                      alt="PowerAdvocate"
                      src={poweradvocate_logo}
                      style={{ width: 150, height: 150, margin: 'auto' }}
                    />
                  }
                  style={{ width: 240, height: 240 }}
                >
                  <Meta title="PowerAdvocate" description="Full-Stack Software Engineer" />
                </Card>
              </Col>
              <Col>
                <Card
                  hoverable
                  cover={
                    <img
                      alt="Khoury"
                      src={khoury_logo}
                      style={{ width: 150, height: 150, margin: 'auto' }}
                    />
                  }
                  style={{ width: 240, height: 240 }}
                >
                  <Meta title="Khoury College" description="Research Assistant" />
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </Content>
    </>
  );
}
