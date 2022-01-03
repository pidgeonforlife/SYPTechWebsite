import React, { useState } from 'react';
import './ServicesPageCard.css';


function ServicesPageCard() {
  return (
      <div className='services'>
          <div className='servicesCards'>
              <img src='/images/webDevelopment.png' />
              <p>Web Development</p>
              <button>More Info</button>
          </div>
          <div className='servicesCards'>
              <img src='/images/searchEngineOptimization.png' />
              <p>Search Engine Optimization</p>
              <button>More Info</button>
          </div>
          <div className='servicesCards'>
              <img src='/images/branding.png' />
              <p>Branding</p>
              <button>More Info</button>
          </div>
      </div>
  );
}

export default ServicesPageCard;