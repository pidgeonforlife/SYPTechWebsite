import React, { useState } from 'react';
import './HomePageBody.css';


function HomePageBody() {
  return (
      <div className='homePageBody'>
          <div className='homePageSolutions'>
            <div className='homeSolutionsInfo'>
                <p>Solutions For All Businesses.</p>
                <a>We work with individuals, small, medium and large business, 
                    thus we understand the constraints of budget and scale.
                     All of our products and services have financing options 
                     so that everyone is able to start or modernize their business 
                     without breaking the bank. 
                     We will keep your situation in mind with all of our business, 
                     feel free to ask about month-to-month financing or equity</a>
            </div>
            <div className='homeSolutionsImage'>
                <img src='/images/homeSolution.png' />
            </div>
          </div>
          <div className='homePageAffordable'>
              <img src='/images/homeAffordableTop.png' />
              <p>Affordable For All Businesses.</p>
              <a>All of our products and services have financing options so that everyone 
                  is able to start or modernize their business without breaking the bank. 
                  We will keep your situation in mind with all of our business, feel free to 
                  ask about month-to-month financing or equity sharing models.</a>
              <button>More Info</button>
          </div>
          <div className='homePageProcess'>
              <p>The Process.</p>
              <a>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                  culpa qui officia deserunt mollit anim id est laborum.</a>
          </div>

      </div>
  );
}

export default HomePageBody;