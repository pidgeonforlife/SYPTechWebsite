import React, { useState } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {

{/* <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
<img id='navbarLogo' src='/images/companyLogo.jpeg'/>
</Link> */}

  return (
    <>
    <footer class="footer">
    <div className='info-column'>
        <div className='info-title'>
            <Link to='/home' className='footer-logo'>
            <p>Company Logo</p>
            </Link>
        </div>
        <div>
            <p>Tel: +604-123-1234</p>
        </div>
        <div>
            <p>Email: SYPTech@gmail.com</p>
        </div>
        <div>
            <GitHubIcon />
            <LinkedInIcon />
            <InstagramIcon />
        </div>
    </div>
    <div className='navigation-column'>
        <div className='navigation-title'>
            <p>Navigation</p>
        </div>
        <div>
            <Link to='/home' className='footer-links'>
            <p>Home</p>
            </Link>
        </div>
        <div>
            <Link to='/home' className='footer-links'>
            <p>About</p>
            </Link>
        </div>
        <div>
            <Link to='/home' className='footer-links'>
            <p>Services</p>
            </Link>
        </div>
        <div>
            <Link to='/home' className='footer-links'>
            <p>Portfolio</p>
            </Link>
        </div>
        <div>
            <Link to='/home' className='footer-links'>
            <p>Contact</p>
            </Link>
        </div>
    </div>
    </footer>
    </>
  );
}

export default Footer;