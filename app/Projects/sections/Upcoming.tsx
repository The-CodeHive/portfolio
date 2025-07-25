'use client';

import { motion, useScroll, useSpring, useTransform, useMotionValue, useAnimationFrame, useVelocity } from 'framer-motion';
import { useRef } from 'react';
import './Upcoming.css';

function wrap(min: number, max: number, value: number) {
  const range = max - min;
  return ((((value - min) % range) + range) % range) + min;
}

export default function Upcoming({ baseVelocity = -3 }: { baseVelocity?: number }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 2], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-100, 0, v)}%`);

  const directionFactor = useRef(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="upcoming-wrapper">
      <div className="upcoming-content">
        <motion.h1
          className="upcoming-title million-feeling "
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Im Just Getting Started
        </motion.h1>

        <motion.p
          className="upcoming-sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          If you think this is all I’ve got, you’re in for a surprise.
        </motion.p>
      </div>

      <motion.div className="marquee-track xanh" style={{ x }}>
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} className="marquee-text">
            Way more Coming ahead ——
          </span>
        ))}
      </motion.div>
    </div>
  );
}
