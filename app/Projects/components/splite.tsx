'use client'

import { Suspense, lazy, useEffect, useState } from 'react'

const LazySpline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [showSpline, setShowSpline] = useState(false)

  useEffect(() => {
    // Delay mounting the spline scene slightly to avoid blocking paint
    const timeout = setTimeout(() => setShowSpline(true), 200) // tweak delay as needed
    return () => clearTimeout(timeout)
  }, [])

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
