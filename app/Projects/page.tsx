"use client";

import React, { useEffect, useRef, useState } from 'react'
import Spline from '@splinetool/react-spline/next';
import Spiral from '@/components/interactive-elements/Spiral'
import FooterSecondary from '@/components/FooterSecondry'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './project.css'
import ProjectSection from './ProjectSection';
import TechUsed from './sections/TechUsed';
import BrillxSection from './sections/BrillxSection';
import CodeHiveSection from './sections/CodeHiveSection';
import AlphaSection from './sections/AlphaSection';
import LetMeShow from './sections/LetMeShow';
import Connect from './sections/Connect';

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Track viewport width
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // initialize on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // GSAP scroll animation for the showcase
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".project-showcase",
        start: "top center",
        end: "top top",
        scrub: true,
      }
    });

    tl.to(".project-showcase", {
      borderTopLeftRadius: "0px",
      borderTopRightRadius: "0px",
      ease: "steps(10000)",
    });

    tl.to(".project-showcase .project-brillx", {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power1.out"
    }, "+=0");

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  // Entry animations
  const sectionRef = useRef<HTMLElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 0.5, ease: 'power3.out' } });

    tl.fromTo(
      sectionRef.current,
      { filter: 'blur(20px)', opacity: 0 },
      { filter: 'blur(0px)', opacity: 1, duration: 0.5 }
    )
      .fromTo(
        h1Ref.current,
        { y: 50, opacity: 0, filter: 'blur(10px)' },
        { y: 0, opacity: 1, filter: 'blur(0px)' },
        "+=1"
      )
      .fromTo(
        h2Ref.current,
        { y: 50, opacity: 0, filter: 'blur(10px)' },
        { y: 0, opacity: 1, filter: 'blur(0px)' },
        "+=1"
      )
      .fromTo(
        pRef.current,
        { y: 50, opacity: 0, filter: 'blur(10px)' },
        { y: 0, opacity: 1, filter: 'blur(0px)' },
        "+=1"
      )
      .fromTo(
        btnRef.current,
        { scale: 0.8, opacity: 0, filter: 'blur(10px)' },
        { scale: 1, opacity: 1, filter: 'blur(0px)' },
        "+=1"
      );
  }, []);

  return (
    <main className='project-main'>
      <section className="Projects-main-section">
        <div className='Projects-main-spiral'>
          <Spiral width={1500} height={1500} dotRadius={10} />
        </div>
        <div className='Projects-main-name million-feeling'>Jagdeep Singh</div>
        <div className='Projects-main-Content'>
          <div className="Projects-main-heading">
            <h1 className='project-line1 satoshi'>Projects</h1>
            <p className='project-line2 xanh'></p>
          </div>
        </div>
        <img src="/images/project.png" alt="Projects" className='project-img' />
      </section>

      <ProjectSection/>
      <TechUsed/>
      <LetMeShow/>
      <BrillxSection/>
      <CodeHiveSection/>
      <AlphaSection/>

      {isMobile
        ? <FooterSecondary />
        : <Connect />
      }
    </main>
  )
}

export default Projects
