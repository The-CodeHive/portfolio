'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import './BrillxSection.css'
import { SplineScene } from '../components/splite'
import TechUsed from '@/components/interactive-elements/TechUsed'

gsap.registerPlugin(ScrollTrigger)

const BrillxSection = () => {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!contentRef.current) return

    const elements = contentRef.current.querySelectorAll('.content-h1, .content-sub, .content-p, .content-btns,.techused-container')

    const anim = gsap.fromTo(
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

    return () => {
      anim.scrollTrigger?.kill()
      anim.kill()
    }
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
        <div className='content-p satoshi'>
          BrillX is your AI-powered learning companion — smart, intuitive, and always ready.
          Ask anything and get instant, crystal-clear answers tailored to you.
          <p className='content-p-sub'>
            <span className="brillx-text-highlighter xanhitalic">
              Not just a chatbot — a knowledge engine that learns with you.
            </span>
          </p>
        </div>
        <div className="techused-container">
          <TechUsed
            tech={["Next.js", "Node.js", "Tailwind CSS", "Clerk", "MongoDB"]}
            direction="row"
            color="#ffffffff"
          />
        </div>

        <div className='content-btns'>
          <a href="https://brillx.vercel.app" target="_blank" className="brillx-btn primary">Visit BrillX</a>
          <a href="https://github.com/your-repo" target="_blank" className="brillx-btn">Visit GitHub Repo</a>
        </div>
      </div>
    </section>
  )
}

export default BrillxSection
