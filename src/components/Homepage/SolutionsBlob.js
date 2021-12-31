import React, { useState } from 'react';
import './SolutionsBlob.css';


function SolutionsBlob() {
  return (
    <div className='solutions'>
        <div className='solutions-blob-component'>
            <div className='solutions-blob-text1'>Solutions</div>
            <div className='solutions-blob-text2'>for All Business</div>
            <img src='/images/SolutionsBlob.png' className='solutionsblobimg' />
        </div>
        <div className='desk-img'>
            <img src='/images/WorkDesk.png' className='desk-img'/>
        </div>
    </div>
  );
}

export default SolutionsBlob;