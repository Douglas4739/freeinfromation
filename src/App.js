import React from 'react';
import { Document, Page } from 'react-pdf';
import pdfFile from './Mani.pdf'
  
function App() {
  
  return (
    <div>
      <Document file={pdfFile}>
      </Document>
    </div>
  );
}
  
export default App;
