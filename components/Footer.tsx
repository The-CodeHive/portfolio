'use client';

import React from 'react'
import MagnetLines from './interactive-elements/MagnetLines'
import { ArrowUpRight } from "lucide-react"

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className='connect-form xanh'>
          <div className='headline'>
            <div className='line1'>Let's</div>
            <div className='line2 satoshi'>CREATE</div>
          </div>
          

          <div className='magnet-lines'>
              <MagnetLines
                  rows={32}
                  columns={5}
                  containerSize="15vmin"
                  lineColor="rgb(56, 90, 87)"
                  lineWidth="0.5vmin"
                  lineHeight="3vmin"
                  baseAngle={180}
              />
          </div>
        </div>
        <div className='info satoshi'> 
          <div className="contact-info xanh">
            {/* Email Links */}
            <div className="contact-links-group">
              <a href="mailto:jagdeep.singh12a@gmail.com" className="contact-link">
                  [ Work Email ]
                <ArrowUpRight className="contact-link-icon" />
              </a>
              <a href="mailto:jagdeep.singh12awork@gmail.com" className='contact-link'>
                  [ Personal Email ]
                <ArrowUpRight className="contact-link-icon" />
              </a>
            </div>

            {/* Social Links */}
            <div className="contact-links-group">
              <a href="#" className="contact-link">
                [ LinkedIn ]
                <ArrowUpRight className="contact-link-icon" />
              </a>
              <a href="#" className="contact-link">
                [ Github ]
                <ArrowUpRight className="contact-link-icon" />
              </a>
            </div>

            {/* Social */}
            
            <div className="contact-divider">
                <a href="#" className="contact-link">
                 [ Instagram ]
                <ArrowUpRight className="contact-link-icon" />
                </a>
                <a href="#" className="contact-link">
                  [ Threads ]
                  <ArrowUpRight className="contact-link-icon" />
                </a>
                <a href="#" className="contact-link">
                  [ X (Twitter) ]
                <ArrowUpRight className="contact-link-icon" />
              </a>
            </div>

            
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer