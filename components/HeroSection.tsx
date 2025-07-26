"use client";

import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BlurText from "./interactive-elements/BlurText";
import TypeWriter from './interactive-elements/TypeWriter';
import Spiral from './interactive-elements/Spiral';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);
export default function HeroSection() {
  const [showParagraph, setShowParagraph] = useState(false);

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
    setTimeout(() => {
      setShowParagraph(true);
    }, 800);
  };
  useEffect(() => {
    gsap.to(".hero-spiral", {
      y: -100,
      rotation: -10,
      scrollTrigger: {
        trigger: ".hero-spiral",
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      },
    })

    

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="hero-section" className="hero-section">
       <Image
        src="/sign.png"           
        alt="Logo"
        width={100}
        height={80}
        className="hero-logo"
      />
      <div className='hero-spiral spiral-gpu-accelerated'>
        <Spiral width={1300} height={1300} dotRadius={10} />
      </div>
      <div className='hero-text'>
        <BlurText
          text="Jagdeep Singh"
          delay={200}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="satoshimedium hero-heading"
        />
        <p className={`hero-p satoshithin ${showParagraph ? 'show' : ''}`}>
          I'm a <span className='petit'>
            <TypeWriter words={["Developer", "Designer", "Creator"]} />
          </span>.
        </p>
      </div>
    </section>
  );
}
