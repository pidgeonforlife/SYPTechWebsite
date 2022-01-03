import React, { useState } from 'react';
import './ServicesHeaderBlob.css';
import Button from '@mui/material/Button'


function ServicesHeaderBlob() {
  return (
      <div className='servicesHeader'>
          <div className='blobcontainer'>
             <img src='/images/ServicesHeaderBlob.png' className='servicesHeaderBlob' />
             <p>Services</p>
             <button>Our Services</button>
          </div>

      </div>
  );
}

export default ServicesHeaderBlob;