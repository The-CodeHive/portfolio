'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { SplineScene } from '../components/splite'
import TechUsed from '@/components/interactive-elements/TechUsed'
import './CodeHiveSection.css'

gsap.registerPlugin(ScrollTrigger)

const CodeHiveSection = () => {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!contentRef.current) return

    const elements = contentRef.current.querySelectorAll(
      '.main-heading, .sub-heading, .description, .techused-container, .button-group'
    )

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
          once: true,
        },
      }
    )

    return () => {
      anim.scrollTrigger?.kill()
      anim.kill()
    }
  }, [])

  return (
    <section className="codehive-section satoshi">
      <div className="corner-div" />

      <div className="spline-bg">
        <SplineScene scene="https://draft.spline.design/ul8stQTmgK6DrGuO/scene.splinecode" />
      </div>

      <div className="content-container" ref={contentRef}>
        <h1 className="main-heading">CodeHive</h1>
        <h2 className="sub-heading petit">Collaborate on code in real-time</h2>
        <p className="description satoshi">
          Elevate your team’s coding experience. Code together seamlessly, in real-time.<br /> 
          <span className="codehive-text-highlighter xanhitalic">
            Build, debug, and grow as one — with speed, clarity, and precision.
          </span>
        </p>

        <div className="techused-container">
          <TechUsed
            tech={["Next.js", "Node.js", "Socket.io", "CodeMirror", "WebRTC"]}
            direction="row"
            color="#ffffffff"
          />
        </div>

        <div className="button-group">
          <a className="secondary-btn" href="https://thecodehive.vercel.app" target="_blank">Visit CodeHive</a>
          <a className="primary-btn" href="" target="_blank">Visit Github Repo</a>
        </div>
      </div>
    </section>
  )
}

export default CodeHiveSection
