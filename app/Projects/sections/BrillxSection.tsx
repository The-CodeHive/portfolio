'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import './BrillxSection.css'
import { SplineScene } from '../components/Alpha/splite'

gsap.registerPlugin(ScrollTrigger)

const BrillxSection = () => {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!contentRef.current) return

    const elements = contentRef.current.querySelectorAll('.content-h1, .content-sub, .content-p, .content-btns')

    gsap.fromTo(
      elements,
      {
        opacity: 0,
        filter: 'blur(20px)',
        y: 40,
      },
      {
        opacity: 1,
        filter: 'blur(0px)',
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      }
    )
  }, [])

  return (
    <section className='brillx-section satoshi'>
      <div className="brillx-corner-div" />
      <div className="spline-bg">
        <SplineScene scene="https://prod.spline.design/xiTamitN5czVqKtG/scene.splinecode" />
      </div>
      <div className="content-brillx" ref={contentRef}>
        <h1 className='content-h1'>BrillX</h1>
        <p className='content-sub petit'>Smarter learning starts with a single question.</p>
        <div className='content-p xanh'>
          BrillX is your AI-powered learning companion — smart, intuitive, and always ready.
          Ask anything and get instant, crystal-clear answers tailored to you.<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className="text-highlighter xanhitalic">
            &nbsp;Not just a chatbot — a knowledge engine that learns with you.&nbsp;
          </span>
        </div>
        <div className='content-btns'>
          <a href="https://github.com/your-repo" target="_blank" className="brillx-btn">View on GitHub</a>
          <a href="https://brillx.vercel.app" target="_blank" className="brillx-btn primary">Launch BrillX</a>
        </div>
      </div>
    </section>
  )
}

export default BrillxSection
