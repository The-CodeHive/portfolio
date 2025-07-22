import React from 'react';
import { SplineScene } from '../components/splite';
import './CodeHiveSection.css';

const LetMeShow = () => {
  return (
    <main className='show-section'>
      <div className="show-corner-div" />

      <div className="spline-bg desktop-only">
        <SplineScene scene="https://draft.spline.design/a-KxmuTJLczMnSES/scene.splinecode" />
      </div>

      <div className="mobile-fallback mobile-only xanh">
        <h2>Here's a glimpse of what I bring to the table</h2>
      </div>
    </main>
  );
};

export default LetMeShow;
