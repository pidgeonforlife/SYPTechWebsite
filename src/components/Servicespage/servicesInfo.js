import React, { useState } from 'react';
import './servicesInfo.css';

function ServicesInfo() {
    return (
        <div className='info'>
            <div className='info-title'>
                <p>What We Do.</p>
                <a>We firmly believe that everyone deserves an opportunity  for a great business. 
                    What we can do for you is creating that opportunity through a website.</a>
            </div>
            <div className='serviceCards'>
            <div className='servCard'>
                <p>Strategy.</p>
                <a>Analytics and Research <br />
                Interactive Workshops <br />
                Brand Strategy <br />
                Content Strategy <br />
                Digital Strategy</a>
            </div>
            <div className='servCard'>
                <p>Design.</p>
                <a>Brand Guides <br />
                Prototypes <br />
                UI/UX & Web Design <br />
                Visual Asset Creation</a>
            </div>
            <div className='servCard'>
                <p>Development.</p>
                <a>System Architecture Design <br />
                Full-Stack Development <br />
                3rd Party Integrations <br />
                Performance Optimization</a>
            </div>
            </div>
            <div className='inquire'>
                <img src='/images/inquireImage.png' />
                <div className='servicesBtn'>
                    <button>Inquire Now</button>
                </div>
            </div>
        </div>
    );
  }
  
  export default ServicesInfo;