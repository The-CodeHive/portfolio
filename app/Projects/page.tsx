"use client";


import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import React, { useEffect, useRef } from 'react'
import Spiral from '@/components/interactive-elements/Spiral'
import FooterSecondary from '@/components/FooterSecondry'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './project.css'

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".project-showcase",
        start: "top center",
        end: "top top",
        scrub: true,
      }
    });

    tl.to(".project-showcase", {
      borderTopLeftRadius: "0px",
      borderTopRightRadius: "0px",
      ease: "steps(10000)",
    });

    tl.to(".project-showcase .project-brillx", {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power1.out"
    },
    "+=0"
    );

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);
  const sectionRef = useRef(null);
  const h1Ref = useRef(null);
  const h2Ref = useRef(null);
  const pRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 0.5, ease: 'power3.out' } });

    tl.fromTo(
      sectionRef.current,
      { filter: 'blur(20px)', opacity: 0 },
      { filter: 'blur(0px)', opacity: 1, duration: 0.5 }
    )
      .fromTo(
        h1Ref.current,
        { y: 50, opacity: 0, filter: 'blur(10px)' },
        { y: 0, opacity: 1, filter: 'blur(0px)' },
        "+=1"
      )
      .fromTo(
        h2Ref.current,
        { y: 50, opacity: 0, filter: 'blur(10px)' },
        { y: 0, opacity: 1, filter: 'blur(0px)' },
        "+=1"
      )
      .fromTo(
        pRef.current,
        { y: 50, opacity: 0, filter: 'blur(10px)' },
        { y: 0, opacity: 1, filter: 'blur(0px)' },
        "+=1"
      )
      .fromTo(
        btnRef.current,
        { scale: 0.8, opacity: 0, filter: 'blur(10px)' },
        { scale: 1, opacity: 1, filter: 'blur(0px)' },
        "+=1"
      );
  }, []);

  return (
    <main className='project-main'>
      <section className="Projects-main-section">
        <div className='Projects-main-spiral'>
          <Spiral width={1500} height={1500} dotRadius={10} />
        </div>
        <div className='Projects-main-name million-feeling'>Jagdeep Singh</div>
        <div className='Projects-main-Content'>
          <div className="Projects-main-heading ">
            <h1 className='project-line1 satoshi'>Projects</h1>
            <p className='project-line2 xanh'>
              The list is endless—just need time to update.😊
            </p>
          </div>
        </div>
        <img src="/images/project.png" alt="Projects" className='project-img' />
      </section>

      <section className='project-showcase'>
        
          <div className='project-brillx satoshi'>
          <div className='brillx-wrapper'>
            <DotLottieReact
                className='hero-cat-animation'
                src="https://lottie.host/3fd833c2-9b53-4e55-9289-a431fa30df91/hYyh6zwgdY.lottie"
                loop
                autoplay
              />
            <h1 ref={h1Ref} className='hero-h1 satoshi'>Brillx</h1>

              <h2 ref={h2Ref} className='hero-h2 petit'>Curiosity Has No Limits.</h2>
              
            
            <p ref={pRef} className='hero-p xanh'>
              BrillX is your personal AI learning buddy, ready to answer any question and turn learning into an adventure. For kids, teens, and lifelong learners—discover knowledge instantly, in fun and simple ways.
            </p>
            <div>
              <a href="https://brillx.vercel.app" target='_blank' >
                <button ref={btnRef} className="btn noto">Visit BrillX</button>
              </a>
            </div>
          </div>
        </div>

          {/* <div className='project-codehive satoshi'>
              CodeHive
          </div>
          <div className='project-alpha satoshi'>
              Alpha
          </div> */}
      </section>

      <FooterSecondary />
    </main>
  )
}

export default Projects
