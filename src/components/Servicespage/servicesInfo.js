import React, { useState } from 'react';
import './servicesInfo.css';

function ServicesInfo() {
    return (
        <div className='info'>
            <div className='info-title'>
                <p>What We Do</p>
            </div>
            <div className='info-title-paragraph'>
                <p>We firmly believe that everyone deserves an opportunity  for a great business. 
                    What we can do for you is creating that opportunity through a website.</p>
            </div>
            <div className='info-card'>
                <div className='card'>
                    <p>Strategy</p>
                    <a></a>
                </div>
                <div className='card'>
                    <p>Design</p>
                    <a></a>
                </div>
                <div className='card'>
                    <p>Development.</p>
                    <a></a>
                </div>
            </div>
        </div>
    );
  }
  
  export default ServicesInfo;