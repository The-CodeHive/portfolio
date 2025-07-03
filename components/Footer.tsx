'use client';

import React, { useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {

  return (
    <footer className="custom-footer satoshi" >
      <div className="footer-top">
        {/* Left Column - Name & Title */}
        <div className="footer-column left">
          <h2 className="footer-name">Jagdeep Singh</h2>
          <p className="footer-title">Web Developer</p>
        </div>

        {/* Center Column - Navigation */}
        <div className="footer-column center">
          <nav className="footer-nav">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="/Projects">Projects</a></li>
              <li><a href="/About">About</a></li>
            </ul>
          </nav>
        </div>

        {/* Right Column - Emails & Socials */}
        <div className="footer-column right">
          <div className="contact-links-group">
            <a href="mailto:jagdeep.singh12a@gmail.com" target='_blank' className="contact-link">
               Work Email 
              <ArrowUpRight className="contact-link-icon" />
            </a>
            <a href="mailto:jagdeep.singh12awork@gmail.com" target='_blank' className="contact-link">
               Personal Email 
              <ArrowUpRight className="contact-link-icon" />
            </a>
          </div>

          <div className="contact-links-group">
            <a href="https://www.linkedin.com/in/jagdeep-singh-812986249/" target='_blank' className="contact-link">
               LinkedIn 
              <ArrowUpRight className="contact-link-icon" />
            </a>
            <a href="https://github.com/jagdep-singh" target='_blank' className="contact-link">
               Github 
              <ArrowUpRight className="contact-link-icon" />
            </a>
          </div>

          <div className="contact-links-group">
            <a href="https://www.instagram.com/jazz_.deep/" target='_blank' className="contact-link">
               Instagram 
              <ArrowUpRight className="contact-link-icon" />
            </a>
            <a href="https://www.threads.com/@jazz_.deep" target='_blank' className="contact-link">
               Threads 
              <ArrowUpRight className="contact-link-icon" />
            </a>
            <a href="https://twitter.com/" target='_blank' className="contact-link">
               X (Twitter) 
              <ArrowUpRight className="contact-link-icon" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Jagdeep Singh</p>
      </div>
    </footer>
  );
};

export default Footer;
