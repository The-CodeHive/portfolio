'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="custom-footer satoshi">
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
              <li><a href="#">Projects</a></li>
              <li><a href="#">About</a></li>
            </ul> 
          </nav>
        </div>

        {/* Right Column - Emails & Socials */}
        <div className="footer-column right">
          <div className="contact-links-group">
            <a href="mailto:jagdeep.singh12a@gmail.com" className="contact-link">
               Work Email 
              <ArrowUpRight className="contact-link-icon" />
            </a>
            <a href="mailto:jagdeep.singh12awork@gmail.com" className="contact-link">
               Personal Email 
              <ArrowUpRight className="contact-link-icon" />
            </a>
          </div>

          <div className="contact-links-group">
            <a href="#" className="contact-link">
               LinkedIn 
              <ArrowUpRight className="contact-link-icon" />
            </a>
            <a href="#" className="contact-link">
               Github 
              <ArrowUpRight className="contact-link-icon" />
            </a>
          </div>

          <div className="contact-links-group">
            <a href="#" className="contact-link">
               Instagram 
              <ArrowUpRight className="contact-link-icon" />
            </a>
            <a href="#" className="contact-link">
               Threads 
              <ArrowUpRight className="contact-link-icon" />
            </a>
            <a href="#" className="contact-link">
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
