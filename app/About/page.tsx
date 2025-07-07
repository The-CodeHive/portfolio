'use client';
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Spiral from '@/components/interactive-elements/Spiral';
import FooterSecondary from '@/components/FooterSecondry';
import './about.css';

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  const contentRef = useRef<HTMLElement>(null);

  const gridItems = [
    {
      title: 'Believe',
      img: './images/believe.png',
      body: `Setting the foundation — curiosity, clarity, and collaboration.

This is where every project begins for me. Not in the editor — but in the questions. Why does this need to be built? Who does it serve? What truly matters?

I dive deep — researching, listening, aligning with purpose. It’s about forming a shared language before a single line of code is written.

Includes:\n Discovery → Strategy → Technical Direction`,
    },
    {
      title: 'Create',
      img: './images/create.png',
      body: `Transforming ideas into intuitive, intelligent digital systems.

From elegant UIs to clean backend logic, I craft experiences that don’t just work — they resonate. Every app I build balances performance and beauty, clarity and complexity, purpose and play.

I work with React, Next.js, Python, and vanilla JavaScript.

Includes:\n UI/UX Design → Frontend Development → Scripting & Automation`,
    },
    {
      title: 'Action',
      img: './images/action.png',
      body: `Bringing ideas to life — building, shipping, iterating.

Shipping is sacred. For me, it’s not just about finishing — it's about following through. With tools like Git, Linux, and VS Code, I move ideas from localhost to live, always refining on the fly.

Includes: \nDevelopment → Deployment → Collaboration`,
    },
  ];

  const verticalItems = [
    {
      title: 'Education',
      body: `B.E. Computer Science — Blockchain Technology \n(4th Year)

High School — DBMS Kadma High School, Jamshedpur`,
    },
    {
      title: 'Beyond Code',
      body: `Chess is more than a game to me — it's a philosophy. As captain of my university chess team,\n I’ve led under pressure, strategized with foresight, and competed nationally.\n It’s trained me in pattern recognition, critical thought, and staying calm in chaos.`,
    },
    {
        title: 'Skills',
        body: `Languages: Python · C++ · JavaScript · TypeScript
                Framework: React · Next.js · Node.js · Express.js
                Utilities: Figma · Git · Docker · Postman · Notion · Warp Terminal · Raycast · TablePlus
                Strengths: Data Analysis · Problem-Solving · Team Collaboration · Creative Thinking · Adaptability · Persistence\n(this portfolio took 7 drafts to make)  `,
      },

    {
      title: 'My Approach',
      body: `I write code with meaning.
I collaborate with curiosity.
I build for impact.

Let’s create something bold, beautiful — and better than expected.`,
    },
  ];

  useEffect(() => {
    // Hero & Title animations with blur using fromTo
    gsap.fromTo('.portfolio-hero h1',
      { opacity: 0, y: 30, filter: 'blur(10px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1, delay: 0.2, ease: 'power3.out' }
    );
    gsap.fromTo('.portfolio-hero p',
      { opacity: 0, y: 20, filter: 'blur(10px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1, delay: 0.5, ease: 'power3.out' }
    );

    // Name animation
    gsap.fromTo('.More-About-name',
      { opacity: 0, y: -20, filter: 'blur(10px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1, delay: 0.3, ease: 'power3.out' }
    );
    gsap.to(".More-About-spiral1", {
      y: -100,
      rotation: 10,
      scrollTrigger: {
        trigger: ".More-About-section",
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      },
    })

    gsap.to(".More-About-spiral2", {
      y: -100,
      rotation: -10,
      scrollTrigger: {
        trigger: ".More-About-section",
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
      },
    })

    // Section cards on scroll with blur
    const sections = gsap.utils.toArray('.section-card');
    sections.forEach((section: any) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 100, filter: 'blur(10px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            end: 'bottom 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
   

  return (
    <main className="portfolio-main">
      <section className="More-About-section" ref={contentRef}>
        <div className="More-About-spiral1 ">
          <Spiral width={1300} height={1300} dotRadius={10} />
        </div>
        <div className="More-About-spiral2 ">
          <Spiral width={1500} height={1500} dotRadius={10} />
        </div>

        <div className="More-About-name million-feeling">
          Jagdeep Singh
        </div>

        <div className="portfolio-hero">
          <div className="content-wrapper">
            <h1>Pixel to Product.</h1>
            <p>Designing and coding with precision and flair ✨</p>
          </div>
        </div>


        {/* Grid for Believe/Create/Action */}
        <div className="portfolio-sections grid">
          {gridItems.map(({ title, body, img }) => (
            <div key={title} className="section-card">
              {img && <img src={img} alt={title} className="section-img" />}
              <h2>{title}</h2>
              <p>
                {body.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </div>
          ))}
        </div>

        {/* Vertical stack for the rest */}
        <div className="portfolio-sections vertical">
          {verticalItems.map(({ title, body }) => (
            <div key={title} className="section-card full-width">
              <h2>{title}</h2>

              {title === "Skills" ? (
                <p>
                  {body.split('\n').map((line, i) => {
                    if (line.trim() === "") return <br key={i} />;

                    const parts = line.split(':');
                    if (parts.length > 1) {
                      const label = parts[0].trim();
                      const value = parts.slice(1).join(':').trim();
                      return (
                        <React.Fragment key={i}>
                          <strong>{label}:</strong> {value}
                          <br />
                        </React.Fragment>
                      );
                    }
                    return (
                      <React.Fragment key={i}>
                        {line}
                        <br />
                      </React.Fragment>
                    );
                  })}
                </p>
              ) : (
                <p>
                  {body.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
      <FooterSecondary />
    </main>
  );
}
