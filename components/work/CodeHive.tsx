"use client";

import React, { useEffect, useRef, useState } from "react";
import TechUsed from "../interactive-elements/TechUsed";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CodeHive: React.FC = () => {
  const floatingRef = useRef<HTMLDivElement>(null);
  const linkLayerRef = useRef<HTMLAnchorElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  const projectLink = "https://thecodehive.vercel.app";
  const [isOverlayVisible, setOverlayVisible] = useState(false);

  // Hover-follow overlay
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
      floating.style.left = `${currentX - w / 2}px`;
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

  // Scroll-triggered GSAP animations
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (window.matchMedia("(max-width: 768px)").matches) return;

    const blocks = [
      container.querySelector(".feature-heading"),
      container.querySelector(".feature-image-container"),
      container.querySelector(".feature-aside"),
    ];

    gsap.set(blocks, { autoAlpha: 0, y: 30, filter: "blur(10px)" });
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
      ease: "power2.out",
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.set(blocks, { clearProps: "all" });
    };
  }, []);

  return (
    <section className="codehive" ref={containerRef}>
      {projectLink && (
        <a
          href={projectLink}
          className="codehive-click-layer"
          ref={linkLayerRef}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            const tgt = e.target as HTMLElement;
            if (
              tgt.closest(".feature-button") ||
              tgt.closest(".feature-aside") ||
              tgt.closest(".feature-heading")
            ) {
              e.preventDefault();
            }
          }}
        />
      )}

      {projectLink && (
        <div
          className={`feature-overlay ${isOverlayVisible ? "show" : ""}`}
          ref={floatingRef}
        >
          Visit CodeHive
        </div>
      )}

      <div className="feature-heading">
        <h1 className="petit">CodeHive</h1>
        <h2 className="satoshithin">Collaborative Code Editor</h2>
      </div>

      <div className="feature-image-container">
        <img
          src="/images/codehive.png"
          alt="CodeHive Collaborative Code Editor"
          className="feature-image"
        />
      </div>

      <div className="feature-aside">
        <p className="feature-description">
          CodeHive lets developers code together in real time without leaving
          their browsers—or their pajamas. Finally, teamwork without the awkward
          coffee breath!
        </p>
        <TechUsed
          tech={["Next.js", "Node.js", "Socket.io", "CodeMirror", "WebRTC"]}
          colorScheme="white"
          direction="row"
        />
        <p className="feature-year">2024</p>
        <button
          className="feature-button satoshi"
          onClick={() => window.open("https://github.com/The-CodeHive/main-project", "_blank")}
        >
          Explore Code
        </button>
        {/* Mobile-only Visit button */}
        <button
          className="feature-button satoshi feature-visit"
          onClick={() => window.open(projectLink, "_blank")}
        >
          Visit CodeHive
        </button>
      </div>
    </section>
  );
};

export default CodeHive;