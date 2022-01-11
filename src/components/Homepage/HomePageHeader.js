import React, { useState } from 'react';
import './HomePageHeader.css';


function HomePageHeader() {
  return (
    <div className='homeHeader'>
      <div className='homeHeaderInfo'>
        <div className='homeHeaderTitle'>
          <p>Making A Statement.</p>
          <a>At SYP TECH, we want to ensure that small businesses can have an online presence. 
            In this day and age, some businesses don’t realize that majority of customers will 
            visit one’s website before considering a purchase.  
            Let us know what we can do for you.</a>
        </div>
        <div className='homeHeaderImage'>
          <img src='/images/rocket.png' />
        </div>
        <div className='homeBottomImages'>
          <img src='/images/colourfulwaves.png' />
        </div>
      </div>
    </div>
  );
}

export default HomePageHeader;