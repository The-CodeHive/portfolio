'use client';

import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { SplineScene } from '../components/splite';
import './Connect.css';

import { Github, Linkedin, Instagram, Twitter, ArrowUpRight, Check } from 'lucide-react';

const Connect = () => {
  const [state, handleSubmit] = useForm('xrblqgzp'); // your Formspree ID
  const [sent, setSent] = useState(false);

  if (state.succeeded && !sent) {
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  }

  return (
    <div className="connect-page">
      

      <div className="spline-background">
        <SplineScene scene="https://prod.spline.design/Hzr1sU4wFkHl5aTe/scene.splinecode" />
      </div>

      <div className="bottom-section">
        <div className="left-div satoshi">
          <form onSubmit={handleSubmit} className="contact-form xanh">
            <h2 className="satoshilight">Message me — ghosting isn’t my thing 😇</h2>

            <input className="xanh" type="text" name="name" placeholder="Your Name" required />
            <ValidationError prefix="Name" field="name" errors={state.errors} />

            <input className="xanh" type="email" name="email" placeholder="Your Email" required />
            <ValidationError prefix="Email" field="email" errors={state.errors} />

            <textarea className="xanh" name="message" placeholder="Your Message" rows={2} required />
            <ValidationError prefix="Message" field="message" errors={state.errors} />

            <button className={`footer-btn satoshi ${sent ? 'sent' : ''}`} type="submit" disabled={state.submitting}>
              {sent ? <><Check size={16} /> Sent</> : 'Send it →'}
            </button>
          </form>
        </div>

        <div className="right-div satoshi">
          <div className="custom-project-footer">
            <div className="project-footer-header">
              <h2 className="project-footer-name">Jagdeep Singh</h2>
              <p className="project-footer-role">Frontend Engineer & Designer</p>
            </div>

            <div className="project-footer-icons">
              <a href="https://www.linkedin.com/in/jagdeep-singh-812986249/" target="_blank"><Linkedin size={22} /></a>
              <a href="https://github.com/jagdep-singh" target="_blank"><Github size={22} /></a>
              <a href="https://www.instagram.com/jazz_.deep/" target="_blank"><Instagram size={22} /></a>
              <a href="https://www.threads.com/@jazz_.deep" target="_blank"><ArrowUpRight size={22} /></a>
              <a href="https://twitter.com/" target="_blank"><Twitter size={22} /></a>
            </div>

            <div className="project-footer-note">
              <p>© 2025 Jagdeep Singh</p>
              <p>Built with care, caffeine & questionable life choices.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
