import React, { useState } from 'react';
import './AboutUsCard.css';

function AboutUsCard() {
  return (
    <div class="aboutCard">
        <div class="aboutCardParagraph">
            <p className='aboutCardP'>Who We Are.</p>
            <a className='aboutCardA'>We are a team of developers that all would like to
                 dedicate our time and skills to make the right website for you</a>
        </div>
        <div class="aboutCardImage">
            <img className='aboutCardImg1' src='/images/aboutCardBackground.png' />
        </div>
    </div>
  );
}

export default AboutUsCard;