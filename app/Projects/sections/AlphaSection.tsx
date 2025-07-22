'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { SplineScene } from '../components/splite'
import TechUsed from '@/components/interactive-elements/TechUsed'
import './AlphaSection.css'

gsap.registerPlugin(ScrollTrigger)

const AlphaSection = () => {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!contentRef.current) return

    const elements = contentRef.current.querySelectorAll(
      '.content-h1, .content-sub, .content-p, .content-btns, .techused-container,.h3-text'
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
          start: 'top 80%',
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
    <section className="alpha-section satoshi">
      <div className="alpha-corner-div" />
      <div className="spline-bg">
        <SplineScene scene="https://draft.spline.design/CSobRiqSEmGf5HlM/scene.splinecode" />
      </div>

      <div className="content-alpha" ref={contentRef}>
        <h1 className="content-h1">Alpha</h1>
        <p className="content-sub petit">Think faster. Iterate smarter. Launch intelligently.</p>
          <div className="content-p satoshi">
            Alpha is your AI-powered workspace for product ideation and validation.
            Brainstorm, prototype, and refine MVPs with natural language — all in real time.
            <p className="content-p-sub">
              <span className="alpha-text-highlighter xanhitalic">
                From raw ideas to ready-to-ship — Alpha accelerates every step of your product journey.
              </span>
            </p>
          </div>

          <div className="techused-container">
            <TechUsed
              tech={["LangChain", "OpenAI", "Pinecone", "Prisma", "tRPC"]}
              direction="row"
              color="#ffffffff"
            />
          </div>

        <h3 className='h3-text satoshi pointer-events-auto'>This LLM is Being Used in BrillX 😁</h3>
        {/* <div className="content-btns">
          <a href="https://github.com/your-repo" target="_blank" className="alpha-btn">Visit GitHub Repo</a>
          <a href="https://alpha.vercel.app" target="_blank" className="alpha-btn primary">Visit Alpha</a>
        </div> */}
      </div>
    </section>
  )
}

export default AlphaSection
