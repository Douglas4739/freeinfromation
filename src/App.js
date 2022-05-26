import React from 'react';
import { Document, Page } from 'react-pdf';
import pdfFile from './Mani.pdf';
import Mani1 from './public/images/Mani1.jpg';
  
function App() {
  
  return (
    <div>
      <img src={Mani1} alt='page 1'></img>
    </div>
  );
}
  
export default App;
