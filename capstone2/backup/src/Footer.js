import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';
//import window.location.href = 'https://www.instagram.com/' as insta;

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Get your center registered on our website
        </p>
        <p className='footer-subscription-text'>
          Put Request at any time
        </p>
        <div className='input-areas'>
          <form>
          
            <Button buttonStyle='btn--outline' onClick={event =>  window.location.href='https://forms.gle/FgHAxA7eajBtSFsJ7'}>Get Registered</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/team'>The Team</Link>
            <Link to=''>Testimonials</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Feature</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
          <a href="https://www.instagram.com/">Instagram</a>
            <a href='https://www.facebook.com/'>Facebook</a>
            <a href='https://www.youtube.com/'>Youtube</a>
            <a href='https://www.twitter.com/'>Twitter</a>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              H4U
              <img
              src={logo}
              />
              {/* <i class='fab fa-typo3' /> */}
            </Link>
          </div>
          <small class='website-rights'>Help For You © 2021</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
