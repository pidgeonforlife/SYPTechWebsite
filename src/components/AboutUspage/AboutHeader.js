import React, { useState } from 'react';
import './AboutHeader.css';
import Button from '@mui/material/Button'


function AboutHeader() {
  return (
      <div className='aboutHeader'>
          <div className='aboutHeaderParagraph'>
              <p>About Us</p>
          </div>
          <div className='aboutHeaderImage'>
              <img className='aboutImg1' src='/images/AboutHeaderBlob.png' />
              <img className='aboutImg2' src='/images/AboutHeaderImage1.png' />
          </div>
      </div>
  );
}

export default AboutHeader;