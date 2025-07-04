"use client"

import type React from "react"
import { useRef, useEffect, useState } from "react"
import gsap from "gsap"
import { usePathname } from "next/navigation"

import "./GooeyNav.css"
import { Link } from "next-transition-router"

export interface GlassmorphismNavItem {
  label: string
  href: string
}

export interface GlassmorphismNavProps {
  items: GlassmorphismNavItem[]
  animationTime?: number
  particleCount?: number
  particleDistances?: [number, number]
  particleR?: number
  timeVariance?: number
  colors?: number[]
  initialActiveIndex?: number
  alwaysVisible?: boolean
}

const GlassmorphismNav: React.FC<GlassmorphismNavProps> = ({
  items,
  animationTime = 0.5,
  particleCount = 18,
  particleDistances = [100, 15],
  particleR = 120,
  timeVariance = 400,
  colors = [1, 2, 3, 1, 2, 3, 1, 4],
  initialActiveIndex,
  alwaysVisible = false,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const navRef = useRef<HTMLUListElement | null>(null)
  const filterRef = useRef<HTMLSpanElement | null>(null)
  const textRef = useRef<HTMLSpanElement | null>(null)

  const pathname = usePathname()
  const pathIndex = items.findIndex((i) => i.href.toLowerCase() === pathname.toLowerCase())
  const startIndex = initialActiveIndex ?? (pathIndex >= 0 ? pathIndex : 0)

  const [activeIndex, setActiveIndex] = useState<number>(startIndex)
  const [isNavVisible, setIsNavVisible] = useState<boolean>(false)
  const [hasHeroFooter, setHasHeroFooter] = useState<boolean | null>(null)

  
  useEffect(() => {
  if (typeof window === "undefined") return;

  let observer: IntersectionObserver | null = null;
  let retryCount = 0;
  const maxRetries = 10;
  const retryDelay = 100;

  const setupObserver = () => {
    const hero = document.getElementById("hero-section");
    const footer = document.querySelector("footer");

    if (alwaysVisible) {
      setHasHeroFooter(false);
      setIsNavVisible(true);
      return;
    }

    if ((!hero || !footer) && retryCount < maxRetries) {
      retryCount++;
      setTimeout(setupObserver, retryDelay);
      return;
    }

    if (!hero || !footer) {
      setHasHeroFooter(false);
      setIsNavVisible(true);
      return;
    }

    setHasHeroFooter(true);

    observer = new IntersectionObserver(
      (entries) => {
        const isAnyVisible = entries.some((entry) => entry.isIntersecting);
        setIsNavVisible(!isAnyVisible);
      },
      { threshold: 0.4 }
    );

    observer.observe(hero);
    observer.observe(footer);
  };

  // Wait 100ms after transition to ensure DOM is rendered
  const timeoutId = setTimeout(setupObserver, 100);

  return () => {
    if (observer) observer.disconnect();
    clearTimeout(timeoutId);
  };
}, [pathname, alwaysVisible]);


  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    if (isNavVisible) {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        ease: "power3.out",
        onStart: () => {
          el.style.pointerEvents = "auto"
          el.style.visibility = "visible"
        },
      })
    } else {
      gsap.to(el, {
        opacity: 0,
        y: 30,
        scale: 0.95,
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => {
          el.style.pointerEvents = "none"
          el.style.visibility = "hidden"
        },
      })
    }
  }, [isNavVisible])

  useEffect(() => {
    if (pathIndex >= 0 && pathIndex !== activeIndex) {
      setActiveIndex(pathIndex)
    }
  }, [pathname, pathIndex, activeIndex])
  useEffect(() => {
    const navEl = navRef.current
    const filterEl = filterRef.current
    const textEl = textRef.current
    const wrapEl = containerRef.current

    if (!navEl || !filterEl || !textEl || !wrapEl) return
    const lis = navEl.querySelectorAll<HTMLLIElement>("li")
    const activeLi = lis[activeIndex]
    if (!activeLi) return

    const wrapRect = wrapEl.getBoundingClientRect()
    const liRect = activeLi.getBoundingClientRect()

    const setStyles = (rect: DOMRect) => {
      const css: Partial<CSSStyleDeclaration> = {
        left: `${rect.x - wrapRect.x}px`,
        top: `${rect.y - wrapRect.y}px`,
        width: `${rect.width}px`,
        height: `${rect.height}px`,
      }
      Object.assign(filterEl.style, css)
      Object.assign(textEl.style, css)
    }

    setStyles(liRect)
    textEl.textContent = activeLi.textContent
    textEl.classList.add("active")

    const ro = new ResizeObserver(() => {
      setStyles(activeLi.getBoundingClientRect())
    })
    ro.observe(wrapEl)

    return () => ro.disconnect()
  }, [activeIndex])

  const noise = (n = 1) => n / 2 - Math.random() * n

  const getXY = (d: number, i: number, total: number) => {
    const ang = ((360 + noise(10)) / total) * i * (Math.PI / 180)
    return [d * Math.cos(ang), d * Math.sin(ang)]
  }

  const createParticle = (i: number, t: number, dist: [number, number]) => {
    const rot = noise(particleR / 8)
    return {
      start: getXY(dist[0], particleCount - i, particleCount),
      end: getXY(dist[1] + noise(10), particleCount - i, particleCount),
      time: t,
      scale: 1 + noise(0.3),
      color: colors[Math.floor(Math.random() * colors.length)],
      rotate: rot > 0 ? (rot + particleR / 15) * 12 : (rot - particleR / 15) * 12,
    }
  }

  const makeParticles = (el: HTMLElement) => {
    const [d0, d1] = particleDistances
    el.style.setProperty("--time", `${animationTime * 2 + timeVariance}ms`)

    for (let i = 0; i < particleCount; i++) {
      const t = animationTime * 2 + noise(timeVariance * 2)
      const p = createParticle(i, t, [d0, d1])

      setTimeout(() => {
        const span = document.createElement("span")
        const point = document.createElement("span")

        span.classList.add("particle")
        span.style.setProperty("--start-x", `${p.start[0]}px`)
        span.style.setProperty("--start-y", `${p.start[1]}px`)
        span.style.setProperty("--end-x", `${p.end[0]}px`)
        span.style.setProperty("--end-y", `${p.end[1]}px`)
        span.style.setProperty("--time", `${p.time}ms`)
        span.style.setProperty("--rotate", `${p.rotate}deg`)

        point.classList.add("point")
        point.style.setProperty("--scale", `${p.scale}`)
        point.style.setProperty("--color", `var(--color-${p.color}, white)`)

        span.appendChild(point)
        el.appendChild(span)

        requestAnimationFrame(() => span.classList.add("active"))
        setTimeout(() => el.contains(span) && el.removeChild(span), p.time)
      }, 40)
    }
  }

  const handleClick = (idx: number) => {
    if (idx === activeIndex) return
    setActiveIndex(idx)

    const filterEl = filterRef.current
    const textEl = textRef.current

    if (filterEl) {
      filterEl.querySelectorAll(".particle").forEach((p) => p.remove())
      makeParticles(filterEl)
    }

    if (textEl) {
      textEl.classList.remove("active")
      void textEl.offsetWidth
      textEl.classList.add("active")
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent, idx: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      handleClick(idx)
    }
  }

  return (
    <div className="glassmorphism-nav-container satoshi" ref={containerRef}>
      <nav>
        <ul ref={navRef}>
          {items.map((item, idx) => (
            <li
              key={item.href}
              className={idx === activeIndex ? "active" : undefined}
              onClick={() => handleClick(idx)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              tabIndex={0}
              aria-current={idx === activeIndex ? "page" : undefined}
              role="tab"
              aria-selected={idx === activeIndex}
            >
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>

      </nav>
    </div>
  )
}

export default GlassmorphismNav
