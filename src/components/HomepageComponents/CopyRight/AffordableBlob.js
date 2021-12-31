import React, { useState } from 'react';
import './AffordableBlob.css';


function AffordableBlob() {
  return (
    <div className='affordable'>
        <div className='affordable-img'>
            <img src='/images/AffordablePic.png' className='affordable-img'/>
        </div>
        <div className='affordable-blob-component'>
            <img src='/images/AffordableBlob.png' className='affordableblobimg' />
            <div className='affordable-blob-text1'>Affordable</div>
            <div className='affordable-blob-text2'>for All Business</div>
        </div>
    </div>
  );
}

export default AffordableBlob;