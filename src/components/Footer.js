import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Automobile newsletter to receive our best deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/sign-up'>Testimonials</Link>
            <Link to='/sign-up'>Careers</Link>
            <Link to='/sign-up'>Investors</Link>
            <Link to='/sign-up'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/sign-up'>Contact</Link>
            <Link to='/sign-up'>Support</Link>
            <Link to='/sign-up'>Book Appointment</Link>
            <Link to='/sign-up'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/sign-up'>Submit Video</Link>
            <Link to='/sign-up'>Ambassadors</Link>
            <Link to='/sign-up'>Agency</Link>
            <Link to='/sign-up'>See our work</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <a href="https://www.gmail.com/">Google</a> 
            <a href="https://www.facebook.com/" >Facebook</a>
            <a href="https://www.instagram.com/">Instagram</a> 
            <a href="https://www.twitter.com/" >Twitter</a> 
            <a href="https://www.linkedin.com/">linkedin</a>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
            AMS71
            </Link>
          </div>
          <small class='website-rights'> ©Copywrite 2021 SDP AMS-71. All Rights Reserved.</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <li><a href="https://www.facebook.com/" class="fab fa-facebook-f"></a></li>
            </Link>
            <Link
              class='social-icon-link  
              instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <li><a href="https://www.instagram.com/" class="fab fa-instagram"></a></li>
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <li><a href="https://www.youtube.com/" class="fab fa-youtube"></a></li>
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <li><a href="https://www.twitter.com/" class="fab fa-twitter"></a></li>
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn' >
                <li><a href="https://www.linkedin.com/" class="fab fa-linkedin"></a></li>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;