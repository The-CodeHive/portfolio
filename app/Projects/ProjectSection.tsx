import React, { useEffect, useRef } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TechUsed from './sections/TechUsed';

gsap.registerPlugin(ScrollTrigger);

const ProjectSection = () => {
  const triggerRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    if (!triggerRef.current) return;

    //Theme color shift
    ScrollTrigger.create({
      trigger: triggerRef.current,
      start: "top top",
      onEnter: () => {
        gsap.to(":root", {
          "--background": "#000000",
          "--foreground": "#ffffffff",
          duration: 1.2,
          ease: "power2.inOut",
        });
      },
      onLeaveBack: () => {
        const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

        gsap.to(":root", {
          "--background": isDarkMode ? "#181f26" : "#fffdf1",
          "--foreground": isDarkMode ? "#fffdf1" : "#281c1c",
          duration: 1.2,
          ease: "power2.inOut",
        });
      },
    });

    // Animate heading
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50, filter: "blur(10px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );

    // Animate paragraph
    gsap.fromTo(
      paragraphRef.current,
      { opacity: 0, y: 50, filter: "blur(10px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: "top 90%",
          end: "top 65%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className='project-section'>
      <div className='theme-trigger' ref={triggerRef}>
        <h2 className="trigger-heading satoshi" ref={headingRef}>
          Let’s shift gears.
        </h2>
        <p className="trigger-p xanh" ref={paragraphRef}>
          Let's enter the build zone — where ideas turn real. From sleek UIs to smart systems, here’s what I’ve been working on.
        </p>
      </div>  
    </div>
  );
};

export default ProjectSection;
