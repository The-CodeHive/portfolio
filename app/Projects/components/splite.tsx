'use client'

import { Suspense, lazy, useEffect, useState } from 'react'

const LazySpline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [showSpline, setShowSpline] = useState(false)
  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    // Check if desktop
    const checkDesktop = () => setIsDesktop(typeof window !== 'undefined' && window.innerWidth >= 1024)
    checkDesktop()
    window.addEventListener('resize', checkDesktop)
    return () => window.removeEventListener('resize', checkDesktop)
  }, [])

  useEffect(() => {
    const timeout = setTimeout(() => setShowSpline(true), 200) 
    return () => clearTimeout(timeout)
  }, [])

  if (!isDesktop) return null

  return (
    <div className={className}>
      {showSpline ? (
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
