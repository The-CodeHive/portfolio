"use client"

import type React from "react"
import { useEffect, useRef } from "react"

interface ScrollHighlightTextProps {
  children: React.ReactNode
  highlightColor?: string
  initialTextColor?: string
  initialBgColor?: string
  animatedTextColor?: string
  animatedBgColor?: string
  className?: string
  duration?: number
  triggerStart?: string
  triggerEnd?: string
  colorChangeDuration?: number
  colorChangeDelay?: number
}

export default function ScrollHighlightText({
  children,
  highlightColor = "#ffffff",
  initialTextColor = "#ffffff",
  initialBgColor = "transparent",
  animatedTextColor = "#000000",
  animatedBgColor = "#ffffff",
  className = "",
  duration = 1.5,
  triggerStart = "top 80%",
  triggerEnd = "bottom 20%",
  colorChangeDuration = 1.2,
  colorChangeDelay = 0.2,
}: ScrollHighlightTextProps) {
  const containerRef = useRef<HTMLSpanElement>(null)
  const highlightRef = useRef<HTMLSpanElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)
  const backgroundRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const loadGSAP = async () => {
      try {
        const { gsap } = await import("gsap")
        const { ScrollTrigger } = await import("gsap/ScrollTrigger")

        gsap.registerPlugin(ScrollTrigger)

        if (!containerRef.current || !highlightRef.current || !textRef.current || !backgroundRef.current) return

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: triggerStart,
            end: triggerEnd,
            toggleActions: "play none none reverse",
            markers: false,
          },
        })

        gsap.set(highlightRef.current, {
          scaleX: 0.0001,
          transformOrigin: "left center",
        })

        gsap.set(textRef.current, {
          color: initialTextColor,
        })

        gsap.set(backgroundRef.current, {
          backgroundColor: initialBgColor,
          opacity: initialBgColor === "transparent" ? 0 : 1,
        })

        tl.to(highlightRef.current, {
          scaleX: 1,
          duration: duration,
          ease: "power2.out",
        })

        tl.to(
          textRef.current,
          {
            color: animatedTextColor,
            duration: colorChangeDuration,
            ease: "power2.inOut",
          },
          colorChangeDelay,
        )

        if (animatedBgColor !== "transparent") {
          tl.to(
            backgroundRef.current,
            {
              backgroundColor: animatedBgColor,
              opacity: 1,
              duration: colorChangeDuration,
              ease: "power2.inOut",
            },
            colorChangeDelay,
          )
        }

        return () => {
          ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
        }
      } catch (error) {
        console.error("GSAP failed to load:", error)
        if (containerRef.current) {
          containerRef.current.style.setProperty("--highlight-duration", `${duration}s`)
          containerRef.current.style.setProperty("--color-duration", `${colorChangeDuration}s`)
          containerRef.current.style.setProperty("--color-delay", `${colorChangeDelay}s`)
          containerRef.current.classList.add("animate-highlight")
        }
      }
    }

    loadGSAP()
  }, [
    duration,
    triggerStart,
    triggerEnd,
    highlightColor,
    initialTextColor,
    initialBgColor,
    animatedTextColor,
    animatedBgColor,
    colorChangeDuration,
    colorChangeDelay,
  ])

  return (
    <>
      <style jsx>{`
        @keyframes highlightSlide {
          from {
            transform: scaleX(0.0001);
          }
          to {
            transform: scaleX(1);
          }
        }

        @keyframes colorChange {
          from {
            color: ${initialTextColor};
          }
          to {
            color: ${animatedTextColor};
          }
        }

        @keyframes bgChange {
          from {
            background-color: ${initialBgColor};
            opacity: ${initialBgColor === "transparent" ? 0 : 1};
          }
          to {
            background-color: ${animatedBgColor};
            opacity: 1;
          }
        }

        .animate-highlight .highlight-overlay {
          animation: highlightSlide var(--highlight-duration, 1.5s) ease-out forwards;
        }

        .animate-highlight .text-content {
          animation: colorChange var(--color-duration, 1.2s) ease-in-out var(--color-delay, 0.2s) forwards;
        }

        .animate-highlight .bg-overlay {
          animation: bgChange var(--color-duration, 1.2s) ease-in-out var(--color-delay, 0.2s) forwards;
        }
      `}</style>

      <span
        ref={containerRef}
        className={`relative inline-block ${className}`}
        style={{ display: "inline-block", position: "relative" }}
      >
        {/* Background overlay */}
        <span
          ref={backgroundRef}
          className="absolute inset-0 bg-overlay"
          style={{
            backgroundColor: initialBgColor,
            opacity: initialBgColor === "transparent" ? 0 : 1,
            zIndex: 1,
            width: "100%",
            height: "100%",
          }}
        />

        {/* Highlight overlay */}
        <span
          ref={highlightRef}
          className="absolute inset-0 highlight-overlay"
          style={{
            backgroundColor: highlightColor,
            transformOrigin: "left center",
            transform: "scaleX(0.0001)",
            zIndex: 2,
            width: "100%",
            height: "100%",
            boxShadow: "0 0 10px rgba(0,0,0,0.05)", // optional
          }}
        />

        {/* Text content */}
        <span
          ref={textRef}
          className="relative text-content"
          style={{
            color: initialTextColor,
            zIndex: 3,
          }}
        >
          {children}
        </span>
      </span>
    </>
  )
}
