"use client";

import React, { useEffect, useState } from 'react';
import BlurText from "./interactive-elements/BlurText";
import TypeWriter from './interactive-elements/TypeWriter';
import Spiral from './interactive-elements/Spiral';
import Image from 'next/image';

export default function HeroSection() {
  const [showParagraph, setShowParagraph] = useState(false);

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
    setTimeout(() => {
      setShowParagraph(true);
    }, 1500);
  };

  return (
    <section id='hero-section' className="hero-section">
       <Image
        src="/sign.png"           
        alt="Logo"
        width={100}
        height={80}
        className="hero-logo"
      />
      <div className='hero-spiral'>
        <Spiral width={1300} height={1300}/>
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
