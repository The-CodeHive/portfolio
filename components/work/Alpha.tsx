"use client";

import React, { useEffect, useRef, useState } from "react";
import TechUsed from "../interactive-elements/TechUsed";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Alpha: React.FC = () => {
  const floatingRef = useRef<HTMLDivElement>(null);
  const linkLayerRef = useRef<HTMLAnchorElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  const projectLink = "https://example.com";
  const [isOverlayVisible, setOverlayVisible] = useState(false);

  // Hover-follow overlay effect
  useEffect(() => {
    const container = containerRef.current;
    const floating = floatingRef.current;
    const clickable = linkLayerRef.current;
    if (!container || !floating || !clickable || window.innerWidth <= 768)
      return;

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

  // Scroll-triggered fade/slide and parallax effect
  useEffect(() => {
    const container = containerRef.current;
    if (!container || window.innerWidth <= 768) return;

    const blocks = [
      container.querySelector(".alpha-feature-heading"),
      container.querySelector(".alpha-feature-image-container"),
      container.querySelector(".alpha-feature-aside"),
    ];

    // Initial hide and position
    gsap.set(blocks, { autoAlpha: 0, y: 30, filter: "blur(10px)" });

    // Fade-in and slide-up with easing
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

    // Parallax for image
    const img = container.querySelector<HTMLImageElement>(
      ".alpha-feature-image"
    );
    if (img) {
      gsap.to(img, {
         yPercent: -30,
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
        ease: "none",
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.set(blocks, { clearProps: "all" });
    };
  }, []);

  return (
    <section className="alpha overflow-visible" ref={containerRef}>
      {projectLink && (
        <a
          href={projectLink}
          className="alpha-click-layer"
          ref={linkLayerRef}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            const tgt = e.target as HTMLElement;
            if (
              tgt.closest(".alpha-feature-button") ||
              tgt.closest(".alpha-feature-aside") ||
              tgt.closest(".alpha-feature-heading")
            ) {
              e.preventDefault();
            }
          }}
        />
      )}

      {projectLink && (
        <div
          className={`alpha-feature-overlay ${
            isOverlayVisible ? "show" : ""
          }`}
          ref={floatingRef}
        >
          Visit Alpha
        </div>
      )}

      <div className="alpha-feature-heading">
        <h1 className="petit">Alpha</h1>
        <h2 className="satoshithin">Next-Gen Product Innovation</h2>
      </div>

      <div className="alpha-feature-image-container overflow-visible">
        <img
          src="/images/alpha.png"
          alt="Alpha Project Screenshot"
          className="alpha-feature-image"
        />
      </div>

      <div className="alpha-feature-aside">
        <p className="alpha-feature-description satoshithin">
          It blends sleek design with smart automation to boost your
          productivity—effortlessly. It’s like having a futuristic assistant,
          minus the sci-fi drama!
        </p>
        <TechUsed
            tech={["LangChain", "OpenAI", "Pinecone", "Prisma", "tRPC"]}
            direction="row"
          />
        <button
          className="alpha-feature-button satoshi"
          onClick={() =>
            window.open("https://github.com/jagdep-singh", "_blank")
          }
        >
          Behind the Build
        </button>

        <button
          className="alpha-feature-button satoshi alpha-feature-visit"
          onClick={() => window.open(projectLink, "_blank")}
        >
          Visit Alpha
        </button>
      </div>
    </section>
  );
};

export default Alpha;