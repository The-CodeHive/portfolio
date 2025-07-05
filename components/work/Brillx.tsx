"use client";

import React, { useEffect, useRef, useState } from "react";
import TechUsed from "../interactive-elements/TechUsed";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Brillx = () => {
  const floatingRef = useRef<HTMLDivElement>(null);
  const linkLayerRef = useRef<HTMLAnchorElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  const projectLink = "https://brillx.vercel.app";
  const [isOverlayVisible, setOverlayVisible] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const floating = floatingRef.current;
    const clickable = linkLayerRef.current;

    if (!container || !floating || !clickable) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    let animationFrameId: number;

    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor;

    const updatePosition = () => {
      currentX = lerp(currentX, mouseX, 0.1);
      currentY = lerp(currentY, mouseY, 0.1);

      const { width: w, height: h } = floating.getBoundingClientRect();
      floating.style.left = `${currentX - w}px`;
      floating.style.top = `${currentY - h / 2}px`;

      animationFrameId = requestAnimationFrame(updatePosition);
    };

    const onMouseMove = (e: MouseEvent) => {
      const { left: cx, top: cy } = container.getBoundingClientRect();
      mouseX = e.clientX - cx;
      mouseY = e.clientY - cy;
    };

    const showOverlay = () => {
      setOverlayVisible(true);
      animationFrameId = requestAnimationFrame(updatePosition);
    };

    const hideOverlay = () => {
      setOverlayVisible(false);
      cancelAnimationFrame(animationFrameId);
    };

    clickable.addEventListener("mousemove", onMouseMove);
    clickable.addEventListener("mouseenter", showOverlay);
    clickable.addEventListener("mouseleave", hideOverlay);

    return () => {
      clickable.removeEventListener("mousemove", onMouseMove);
      clickable.removeEventListener("mouseenter", showOverlay);
      clickable.removeEventListener("mouseleave", hideOverlay);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (window.innerWidth <= 768) return; // skip animations on mobile

    const blocks = [
      container.querySelector(".brillx-feature-heading"),
      container.querySelector(".brillx-feature-image-container"),
      container.querySelector(".brillx-feature-aside"),
    ];

    gsap.set(blocks, {
      autoAlpha: 0,
      y: 30,
      filter: "blur(10px)",
    });

    gsap.to(blocks, {
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: "center center",
        scrub: true,
      },
      autoAlpha: 1,
      y: 0,
      filter: "blur(0px)",
      ease: "none",
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      gsap.set(blocks, { clearProps: "all" });
    };
  }, []);

  return (
    <section className="brillx" ref={containerRef}>
      {projectLink && (
        <a
          href={projectLink}
          className="brillx-click-layer"
          ref={linkLayerRef}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            const target = e.target as HTMLElement;
            if (
              target.closest(".brillx-feature-button") ||
              target.closest(".brillx-feature-aside") ||
              target.closest(".brillx-feature-heading")
            ) {
              e.preventDefault();
            }
          }}
        ></a>
      )}

      {projectLink && (
        <div
          className={`brillx-feature-overlay ${isOverlayVisible ? "show" : ""}`}
          ref={floatingRef}
        >
          Visit BrillX
        </div>
      )}

      <div className="brillx-feature-heading">
        <h1 className="petit">BrillX</h1>
        <h2 className="satoshithin">AI-Powered Learning Platform</h2>
      </div>

      <div className="brillx-feature-image-container">
        <img
          src="/images/brillx.png"
          alt="BrillX SaaS Learning Platform"
          className="brillx-feature-image"
        />
      </div>

      <div className="brillx-feature-aside">
        <p className="brillx-feature-description satoshithin">
          It helps you learn anything you ask—instantly.
          With an AI tutor that never sleeps and content tailored just for you,
          it's like having a genius in your pocket (but way less smug).
        </p>

        <TechUsed
          tech={["Next.js", "Node.js", "Tailwind CSS", "Clerk", "MongoDB"]}
          direction="row"
        />

        <button
          className="brillx-feature-button satoshi"
          onClick={() =>
            window.open("https://github.com/jagdep-singh/brillx", "_blank")
          }
        >
          Behind the Build
        </button>

        {/* Mobile-only Visit button, visibility controlled via CSS */}
        <button
          className="brillx-feature-button satoshi brillx-feature-visit"
          onClick={() => window.open(projectLink, "_blank")}
        >
          Visit BrillX
        </button>
      </div>
    </section>
  );
};

export default Brillx;
