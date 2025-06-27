import React from 'react';
import Cubes from '../interactive-elements/Cubes';
import { blur } from 'three/tsl';
import RetroButton from '../interactive-elements/RetroButton';
import TechUsed from '../interactive-elements/TechUsed';

const CodeHive = () => {
  return (
    <section className="codehive xanh" style={{ position: 'relative', overflow: 'hidden' }}>
      
      <div 
      style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'auto',
          display: 'flex',
          gap: '2rem'
        }}>
        <Cubes
          gridSize={9}
          maxAngle={360}
          radius={3}
          borderStyle="2px dashed rgb(0, 221, 255)"
          faceColor="rgb(13, 2, 26)"
          rippleColor="rgb(255, 0, 81)"
          rippleSpeed={2}
          autoAnimate={true}
          rippleOnClick={true} 
        />
        <div style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: '100%',
          background: 'linear-gradient(to left, rgb(13, 2, 26) 0%, rgb(13, 2, 26) 50%, transparent 100%)',
          zIndex: 1,
          pointerEvents: 'none'
        }}/>
      </div>

      
      <div className='codehive-content' >
        <div className='codehive-heading jetbrains'>CodeHive</div>
        <div className='codehive-p satoshithin'>
          CodeHive is my take on Google Docs, but for code — minus the surveillance vibes. 
          It's a collaborative code editor where you and your friends (or enemies, I don't judge) 
          can write code together in real time and pretend you're building the next unicorn startup.
        </div>
        
        <div className='tech'>
          <TechUsed tech={['Next.js','React','TypeScript','Node.js',]} 
                    direction="row" 
                    colorScheme="white"
          />
        </div>
        
        <div className='button-container'>
         <RetroButton text="Visit CodeHive" link="https://thecodehive.vercel.app/" />
         <RetroButton text={"\u00A0Github\u00A0 Repo\u00A0"} link="https://github.com/The-CodeHive/main-project" />
        </div>
        
      </div>
    </section>
  );
};

export default CodeHive;
