"use client";



import React, { useState } from 'react'
import BlurText from "./interactive-elements/BlurText";
import TypeWriter from './interactive-elements/TypeWriter';
import Image from 'next/image';
import Spiral from './interactive-elements/Spiral';


export default function HeroSection() {


  const [showParagraph, setShowParagraph] = useState(false);

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
    setTimeout(() => {
      setShowParagraph(true);
    }, 2000);
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
        <div className='check'></div>
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
        <p className={`hero-p satoshithin ${showParagraph ? 'show' : ''}`} >
            I'm a <span className='petit'>
              <TypeWriter words={["Developer", "Designer", "Creator"]} />
            </span>.
        </p>
      </div>
    </section>
    
  )
}






