// src/components/Aboutme.tsx
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Aboutme: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // grab the four blocks in the order we want
    const blocks = [
      container.querySelector<HTMLHeadingElement>(".aboutme-heading")!,
      container.querySelector<HTMLDivElement>(".left-text")!,
      container.querySelector<HTMLDivElement>(".right-text")!,
      container.querySelector<HTMLAnchorElement>(".about-link")!,
    ];

    // 1) set them initially invisible, blurred & shifted down
    gsap.set(blocks, {
      autoAlpha: 0,
      y: 30,
      filter: "blur(8px)",
    });

    // 2) animate them into place tied to scroll
    gsap.to(blocks, {
      scrollTrigger: {
        trigger: container,
        start: "top bottom",    // when top of section enters viewport
        end:   "center center", // when section's center is at viewport center
        scrub: true,
      },
      autoAlpha: 1,
      y: 0,
      filter: "blur(0px)",
      stagger: 0.2,
      ease: "none",
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      // remove inline styles on unmount
      gsap.set(blocks, { clearProps: "all" });
    };
  }, []);

  return (
    <div className="aboutme" ref={containerRef}>
      <div className="aboutme-container">
        <h2 className="aboutme-heading petit">The Why Behind My Work</h2>
        <div className="aboutme-content xanh">
          <div className="left-text">
            <p>
            <strong>I design where strategy meets culture and craft.<br/></strong>
            I create thoughtful, impactful work—blending brand, digital, and storytelling to solve real problems with beautiful solutions. Whether starting fresh or refining the existing, I combine big-picture vision with sharp detail.
            </p>
          </div>
          <div className="right-text">
            <p>
            I thrive on collaboration—building better together. I'm always learning, refining, and pushing for excellence. Every project is a chance to connect creativity with impact and leave things better than I found them.
            </p>
            <a href="/About" className="about-link xanhitalic">
               <svg
               className="aboutme-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
                width="20"
                height="20"
                // fill="white"
                // stroke="white"
                style={{ marginRight: "8px", verticalAlign: "middle" }}
              >
                <path xmlns="http://www.w3.org/2000/svg"
                d="M3 4
                  C3 3.44772 3.44771 3 4 3
                  C4.55229 3 5 3.44772 5 4
                  L5 19
                  C5 15.7956 5.31607 16.5587 5.87868 17.1213
                  C6.44129 17.6839 7.20435 18 8 18
                  H17.5858
                  L14.2929 14.7071
                  C13.9024 14.3166 13.9024 13.6834 14.2929 13.2929
                  C14.6834 12.9024 15.3166 12.9024 15.7071 13.2929
                  L20.7071 18.2929
                  C21.0976 18.6834 21.0976 19.3166 20.7071 19.7071
                  L15.7071 24.7071
                  C15.3166 25.0976 14.6834 25.0976 14.2929 24.7071
                  C13.9024 24.3166 13.9024 23.6834 14.2929 23.2929
                  L17.5858 20
                  H8
                  C6.67392 20 5.40215 19.4732 4.46447 18.5355
                  C3.52678 17.5979 3 16.3261 3 15
                  V4
                  Z"
              />
             </svg>
              More about me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;

