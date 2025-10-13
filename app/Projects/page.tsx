"use client";

import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react'
import Spline from '@splinetool/react-spline/next';
import Spiral from '@/components/interactive-elements/Spiral'
import FooterSecondary from '@/components/FooterSecondry'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// @ts-ignore
import './project.css'
import ProjectSection from './ProjectSection';
import TechUsed from './sections/TechUsed';
import BrillxSection from './sections/BrillxSection';
import CodeHiveSection from './sections/CodeHiveSection';
import AlphaSection from './sections/AlphaSection';
import LetMeShow from './sections/LetMeShow';
import Connect from './sections/Connect';
import Upcoming from './sections/Upcoming';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(true);
  const [slideOut, setSlideOut] = useState(false);

  // Debounced resize handler
  useEffect(() => {
    let resizeTimeout: NodeJS.Timeout | null = null;
    const handleResize = () => {
      if (resizeTimeout) clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        setIsMobile(window.innerWidth < 768);
      }, 100);
    };
    handleResize(); // initialize on mount
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeTimeout) clearTimeout(resizeTimeout);
    };
  }, []);

  // Loader: slide out after 3s
  useEffect(() => {
    if (!loading) return;
    const timer = setTimeout(() => setSlideOut(true), 4000);
    return () => clearTimeout(timer);
  }, [loading]);

  // Remove loader from DOM after slide animation
  useEffect(() => {
    if (!slideOut) return;
    const timer = setTimeout(() => setLoading(false), 700); // match transition duration
    return () => clearTimeout(timer);
  }, [slideOut]);

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
  }, []); // Only run once on mount

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
  }, []); // Only run once on mount

  // Memoize Spiral so it only re-renders if isMobile changes
  const spiralMemo = useMemo(() => (
    <Spiral width={1500} height={1500} dotRadius={10} />
  ), [isMobile]);

  return (
    <>
      {loading && (
        <div
          className={`xanh page-loader${slideOut ? ' slide-out' : ''}`}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: '#000',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2rem',
            zIndex: 9999,
            transition: 'transform 0.7s cubic-bezier(.4,0,.2,1)',
            transform: slideOut ? 'translateY(-100%)' : 'translateY(0)',
          }}
        >
          <DotLottieReact
            className='loader-lottie'
            src="https://lottie.host/0666fe32-e83b-4ed7-adbb-36b17b1049f4/VnYuUBu0Uo.lottie"
            loop
            autoplay
            style={{ width: 200, height: 200 }}
          />
        </div>
      )}
      <main className='project-main' style={{ filter: loading ? 'blur(2px)' : 'none', transition: 'filter 0.6s cubic-bezier(.4,0,.2,1)' }}>
        <section className="Projects-main-section">
          <div className='Projects-main-spiral'>
            {spiralMemo}
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
        <Upcoming />

        {isMobile
          ? <FooterSecondary />
          : <Connect />
        }
      </main>
    </>
  )
}

export default Projects
