'use client';
import { useEffect, useState } from 'react';
import ClickSpark from '@/components/interactive-elements/ClickSpark';
import HeroSection from '@/components/HeroSection';
import Aboutme from '@/components/Aboutme';
import Footer from '@/components/Footer';
import Projects from '@/components/Projects';

export default function Home() {
  const [foregroundColor, setForegroundColor] = useState('#000'); // fallback color

  useEffect(() => {
    const rootStyles = getComputedStyle(document.documentElement);
    const cssVarColor = rootStyles.getPropertyValue('--foreground').trim();
    if (cssVarColor) {
      setForegroundColor(cssVarColor);
    }
  }, []);

  return (
    <ClickSpark
      sparkColor={foregroundColor}
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <HeroSection />
      <Aboutme />
      <Projects />
      <Footer />
    </ClickSpark>
  );
}
