import React from 'react';
import { PDFViewer} from '@react-pdf/renderer';
import MyDocument from './ApplicationPDF'
 
 const PDFView= () => (
  <PDFViewer style={{width:'100vw',height:'100vh'}}>
    <MyDocument />
  </PDFViewer>
);
export default PDFView;