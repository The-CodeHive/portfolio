'use client';

import React from 'react';

const FooterSecondary = () => {
  return (
    <footer id="footer-secondary" className="custom-footer satoshi">
      <div className="footer-top">
        {/* Left Column - Name */}
        <div className="footer-column left">
          <h2 className="footer-name">Jagdeep Singh</h2>
        </div>

        {/* Right Column - Title/Role */}
        <div className="footer-column right" style={{ textAlign: 'right' }}>
          <p className="footer-title">Software Engineer & Designer</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Jagdeep Singh — As if the internet needed <em>another</em> masterpiece.</p>
      </div>
    </footer>
  );
};

export default FooterSecondary;
