"use client"

import type React from "react"
import { useMemo, useId } from "react"

const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5))

const colorPresets = {
  white: "var(--foreground)",
  gold: "#ffd700",
  cyan: "#00ffff",
  magenta: "#ff00ff",
  green: "#00ff00",
  orange: "#ff8800",
  red: "#ff0000",
  blue: "#0066ff",
  purple: "#9900ff",
  yellow: "#ffff00",
}

const gradientPresets = {
  none: null,
  rainbow: ["#ff0000", "#ff9900", "#ffff00", "#00ff00", "#0099ff", "#6633ff"],
  sunset: ["#ff0000", "#ff9900", "#ffcc00"],
  ocean: ["#0066ff", "#00ccff", "#00ffcc"],
  fire: ["#ff0000", "#ff6600", "#ffcc00"],
  neon: ["#ff00ff", "#00ffff", "#ffff00"],
  pastel: ["#ffcccc", "#ccffcc", "#ccccff"],
  grayscale: ["#ffffff", "#999999", "#333333"],
}

function round(num: number, decimals = 5) {
  return Number(num.toFixed(decimals))
}

interface SpiralProps {
  points?: number
  dotRadius?: number
  duration?: number
  colorPreset?: keyof typeof colorPresets
  gradientPreset?: keyof typeof gradientPresets
  backgroundColor?: string
  pulseEffect?: boolean
  opacityMin?: number
  opacityMax?: number
  sizeMin?: number
  sizeMax?: number
  width?: number
  height?: number
  className?: string
  style?: React.CSSProperties
}

const Spiral: React.FC<SpiralProps> = ({
  points = 600,
  dotRadius = 5,
  duration = 5,
  colorPreset = "white",
  gradientPreset = "none",
  backgroundColor = "rgba(0, 0, 0, 0)",
  pulseEffect = true,
  opacityMin = 0,
  opacityMax = 1.0,
  sizeMin = 0.5,
  sizeMax = 1.5,
  width = 400,
  height = 400,
  className = "",
  style = {},
}) => {
  const spiralData = useMemo(() => {
    const maxRadius = Math.min(width, height) / 2 - dotRadius * sizeMax
    const centerX = width / 2
    const centerY = height / 2

    const spiralPoints = []

    for (let i = 0; i < points; i++) {
      const theta = (i + 0.5) * GOLDEN_ANGLE
      const r = Math.sqrt((i + 0.5) / points) * maxRadius

      const x = round(centerX + r * Math.cos(theta))
      const y = round(centerY + r * Math.sin(theta))

      const progress = i / (points - 1)

      spiralPoints.push({
        x,
        y,
        progress,
        animationDelay: progress * duration,
      })
    }

    return spiralPoints
  }, [points, width, height, dotRadius, sizeMax, duration])

  const uniqueId = useId()
  const gradientId = `spiral-gradient-${uniqueId}`

  const selectedGradient = gradientPresets[gradientPreset]
  const selectedColor = colorPresets[colorPreset]

  const containerStyle: React.CSSProperties = {
    backgroundColor,
    width,
    height,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "visible",
    ...style,
  }

  return (
    <div className={className} style={containerStyle}>
      <svg width={width} height={height} style={{ overflow: "visible" }}>
        {selectedGradient && (
          <defs>
            <radialGradient id={gradientId} cx="50%" cy="50%" r="50%">
              {selectedGradient.map((color, index) => (
                <stop
                  key={index}
                  offset={`${(index / (selectedGradient.length - 1)) * 100}%`}
                  stopColor={color}
                />
              ))}
            </radialGradient>
          </defs>
        )}

        {spiralData.map((point, index) => (
          <circle
            key={index} 
            cx={point.x}
            cy={point.y}
            r={dotRadius}
            fill={selectedGradient ? `url(#${gradientId})` : selectedColor}
            className={pulseEffect ? "spiral-dot" : ""}
            style={
              pulseEffect
                ? {
                    
                    opacity: 0,
                    animationDelay: `${point.animationDelay}s`,
                  }
                : { opacity: opacityMax }
            }
          />
        ))}
      </svg>

      {pulseEffect && (
        <style jsx global>{`
          .spiral-dot {
            transform-origin: center;
            transform-box: fill-box;
            animation: spiralPulse ${duration}s ease-in-out infinite;
            will-change: transform, opacity;
            animation-fill-mode: both;
          }

          @keyframes spiralPulse {
            0%,
            100% {
              transform: scale(${sizeMin});
              opacity: ${opacityMin};
            }
            50% {
              transform: scale(${sizeMax});
              opacity: ${opacityMax};
            }
          }
        `}</style>
      )}
    </div>
  )
}

export default Spiral
