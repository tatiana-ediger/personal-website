import React from 'react';
import { Button, Layout } from 'antd';
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
import { Document, Page, pdfjs } from 'react-pdf';
import resume from '../images/superset_resume.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const { Content } = Layout;

export default function Resume() {
  const [numPages, setNumPages] = React.useState<number>();
  const [pageNumber, setPageNumber] = React.useState<number>(1);

  return (
    <>
      <Content style={{ padding: '50px', alignSelf: 'center' }}>
        <div className="site-layout-content">
          <div>
            <Button
              onClick={() => setPageNumber((prev: number) => (prev == 1 ? prev : prev - 1))}
              icon={<CaretLeftOutlined />}
            ></Button>
            <Button
              onClick={() => setPageNumber((prev: number) => (prev == numPages ? prev : prev + 1))}
              icon={<CaretRightOutlined />}
            ></Button>
          </div>
          <Document
            file={resume}
            onLoadError={console.error}
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          >
            <Page pageNumber={pageNumber}></Page>
          </Document>
        </div>
      </Content>
    </>
  );
}
