import React, { useState } from 'react';
import './ProcessBlob.css';


function ProcessBlob() {
  return (
    <div className='blob-component'>
        <div className='blob-text'>PROCESS</div>
        <img src='/images/blobcomponent.png' className='blobimg' />
        <div className='images-blob'>
        <img src='/images/Consultation.png' className='images-blob' />
        <img src='/images/Wireframe.png' className='images-blob' />
        <img src='/images/Coding.png' className='images-blob' />
        <img src='/images/Publishing.png' className='images-blob' />
        </div>
    </div>
  );
}

export default ProcessBlob;