'use client';

import { TransitionRouter } from 'next-transition-router';
import { gsap } from 'gsap';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TransitionRouter
      leave={(next) => {
        const tween = gsap.to('main', { opacity: 0, duration: 0.5, onComplete: next });
        return () => tween.kill();
      }}
      enter={(next) => {
        const tween = gsap.fromTo('main', { opacity: 0 }, { opacity: 1, duration: 0.5, onComplete: next });
        return () => tween.kill();
      }}
      auto={true} 
    >
      {children}
    </TransitionRouter>
  );
}