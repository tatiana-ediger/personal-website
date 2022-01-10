import React from 'react';
import { Layout } from 'antd';
import { Document, Page, pdfjs } from 'react-pdf';
import resume from '../images/general_resume.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const { Content } = Layout;

export default function Resume() {
  return (
    <>
      <Content style={{ padding: '50px', alignSelf: 'center' }}>
        <div className="site-layout-content">
          <Document file={resume} onLoadError={console.error}>
            <Page pageNumber={1}></Page>
          </Document>
        </div>
      </Content>
    </>
  );
}
