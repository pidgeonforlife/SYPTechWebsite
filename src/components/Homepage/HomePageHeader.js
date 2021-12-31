import React, { useState } from 'react';
import './HomePageHeader.css';


function HomePageHeader() {
  return (
    <>
    <div className="header-content">
      <div className='header-img'>
        <img className='header-image' src='/images/homePageImage.png' />
      </div>
      <div className='header-paragraph'>
        <p className='p-title'>
          Making a Statement
        </p>
        <p className='p-text'>
        At SYP TECH, we want to ensure that small businesses can have an online presence. 
        In this day and age, some businesses don’t realize that majority of customers will visit one’s website before considering a purchase. 
        &nbsp;<br />Having a website ensures the legitimacy of your business and creates an opportunity to stand out 
        and clearly communicate the quality of your products to your customers.
        </p>
      </div>
    </div>
    </>
  );
}

export default HomePageHeader;