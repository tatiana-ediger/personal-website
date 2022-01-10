import React from 'react';
import { Card, Col, Image, Layout, Row } from 'antd';
import Meta from 'antd/lib/card/Meta';

import prof_pic from '../images/prof_2022.jpg';
import oreilly_logo from '../images/oreilly-logo.jpeg';
import whoop_logo from '../images/whoop-logo.png';
import poweradvocate_logo from '../images/poweradvocatelogo.png';
import khoury_logo from '../images/khoury-logo.png';
import ExperienceModal from '../components/ExperienceModal';

const { Content } = Layout;

export default function Home() {
  const [modal, setModal] = React.useState<ExperienceModalType>(ExperienceModalType.NONE);

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
                  onClick={() => setModal(ExperienceModalType.OREILLY)}
                >
                  <Meta title="O'Reilly Media" description="Course Designer &amp; Teacher" />
                </Card>
              </Col>
              <Col>
                <Card
                  hoverable
                  cover={<img alt="WHOOP" src={whoop_logo} />}
                  style={{ width: 240, height: 240 }}
                  onClick={() => setModal(ExperienceModalType.WHOOP)}
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
                  onClick={() => setModal(ExperienceModalType.PA)}
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
                  onClick={() => setModal(ExperienceModalType.KHOURY)}
                >
                  <Meta title="Khoury College" description="Research Assistant" />
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </Content>
      {modal == ExperienceModalType.OREILLY && (
        <ExperienceModal
          visible={modal == ExperienceModalType.OREILLY}
          onCancel={() => setModal(ExperienceModalType.NONE)}
          title="O'Reilly: Course Designer &amp; Teacher"
          description="TODO"
        />
      )}
      {modal == ExperienceModalType.WHOOP && (
        <ExperienceModal
          visible={modal == ExperienceModalType.WHOOP}
          onCancel={() => setModal(ExperienceModalType.NONE)}
          title="WHOOP: Software Engineer &amp; Data Scientist"
          description="TODO"
        />
      )}
      {modal == ExperienceModalType.PA && (
        <ExperienceModal
          visible={modal == ExperienceModalType.PA}
          onCancel={() => setModal(ExperienceModalType.NONE)}
          title="PowerAdvocate: Full-Stack Software Engineer"
          description="TODO"
        />
      )}
      {modal == ExperienceModalType.KHOURY && (
        <ExperienceModal
          visible={modal == ExperienceModalType.KHOURY}
          onCancel={() => setModal(ExperienceModalType.NONE)}
          title="Khoury College: Research Assistant"
          description="TODO"
        />
      )}
    </>
  );
}

export enum ExperienceModalType {
  OREILLY,
  WHOOP,
  PA,
  KHOURY,
  NONE
}
