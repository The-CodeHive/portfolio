"use client";
import Lanyard from './interactive-elements/lanyard'
import React, { useState } from 'react'
import BlurText from "./interactive-elements/BlurText";
import TypeWriter from './interactive-elements/TypeWriter';

import Iridescence from './interactive-elements/Iridescence';
import Image from 'next/image';

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

const heroSection = () => {
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
      <div className="iridescence-wrapper"> 
        <Iridescence
          color={[0.2,0.0,0.2]}  //[0.18, 0.12, 0.36]
          mouseReact={true}
          amplitude={0.1}
          speed={1.0}
        />
      </div>
      <div className='hero-lanyard'>
        <Lanyard position={[0, 0, 13]} gravity={[0, -50, 0]} />
      </div>
      <div className='hero-text'>
        <BlurText
            text="Jagdeep Singh"
            delay={200}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="xanh hero-heading"
          />
        <p className={`hero-p satoshithin ${showParagraph ? 'show' : ''}`} >
            I'm a <span className='xanhitalic'>
              <TypeWriter words={["Developer", "Designer", "Creator"]} />
            </span>.
        </p>
      </div>
    </section>
    
  )
}

export default heroSection




