'use client'

import { Suspense, lazy, useEffect, useState } from 'react'
import { useViewportDetection } from '@/lib/utils'

const LazySpline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
  threshold?: number
  rootMargin?: string
}

export function SplineScene({ scene, className, threshold = 0.1, rootMargin = '50px' }: SplineSceneProps) {
  const [showSpline, setShowSpline] = useState(false)
  const [isDesktop, setIsDesktop] = useState(true)
  const { ref, isInViewport } = useViewportDetection<HTMLDivElement>(threshold, rootMargin)

  useEffect(() => {
    // Check if desktop
    const checkDesktop = () => setIsDesktop(typeof window !== 'undefined' && window.innerWidth >= 1024)
    checkDesktop()
    window.addEventListener('resize', checkDesktop)
    return () => window.removeEventListener('resize', checkDesktop)
  }, [])

  // Start loading spline when in viewport
  useEffect(() => {
    if (isInViewport) {
      const timeout = setTimeout(() => setShowSpline(true), 100)
      return () => clearTimeout(timeout)
    }
  }, [isInViewport])

  if (!isDesktop) return null

  return (
    <div ref={ref} className={className}>
      {isInViewport && showSpline ? (
        <Suspense
          fallback={
            <div className="w-full h-full flex items-center justify-center">
              <span className="loader"></span>
            </div>
          }
        >
          <LazySpline scene={scene} />
        </Suspense>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <span className="loader"></span>
        </div>
      )}
    </div>
  )
}
