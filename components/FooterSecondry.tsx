'use client';

import React from 'react';
import {
  Github,
  Linkedin,
  Instagram,
  Twitter,
  ArrowUpRight
} from 'lucide-react';

const FooterSecondary = () => {
  return (
    <footer id="footer-secondary" className="custom-footer satoshi">
      <div className="footer-top">
        {/* Left Column - Name */}
        <div className="footer-column left">
          <h2 className="footer-name">Jagdeep Singh</h2>
        </div>

        {/* Right Column - Title & Icons */}
        <div className="footer-column right" style={{ textAlign: 'right' }}>
          <p className="footer-title">Frontend Engineer & Designer</p>

          <div className="contact-links-group" style={{ flexDirection: 'row', justifyContent: 'flex-end', gap: '1rem', marginTop: '1rem' }}>
            <a href="https://www.linkedin.com/in/jagdeep-singh-812986249/" target="_blank" className="contact-link" aria-label="LinkedIn">
              <Linkedin size={25} />
            </a>
            <a href="https://github.com/jagdep-singh" target="_blank" className="contact-link" aria-label="GitHub">
              <Github size={25} />
            </a>
            <a href="https://www.instagram.com/jazz_.deep/" target="_blank" className="contact-link" aria-label="Instagram">
              <Instagram size={25} />
            </a>
            <a href="https://www.threads.com/@jazz_.deep" target="_blank" className="contact-link" aria-label="Threads">
              <ArrowUpRight size={25} /> {/* Placeholder icon for Threads */}
            </a>
            <a href="https://twitter.com/" target="_blank" className="contact-link" aria-label="X (Twitter)">
              <Twitter size={25} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p style={{ fontSize: '15px' }}>© 2025 Jagdeep Singh — Built with care, caffeine, and questionable life choices.</p>
      </div>
    </footer>
  );
};

export default FooterSecondary