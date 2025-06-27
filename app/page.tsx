'use client';
import { useState } from 'react';
import ClickSpark from '@/components/interactive-elements/ClickSpark';
import HeroSection from '@/components/HeroSection';
import Aboutme from '@/components/Aboutme';
import Footer from '@/components/Footer';
import Projects from '@/components/Projects';
import FutureProjects from '@/components/FutureProjects';


export default function Home() {
  return (

    <>
        <ClickSpark
          sparkColor='#fff'
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
            <HeroSection />
        </ClickSpark>
            <Projects />
            <FutureProjects />
            <Aboutme />
            <Footer/>
        

    </>
  );
}
