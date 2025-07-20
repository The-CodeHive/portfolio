'use client'

import { SplineScene } from "../components/Alpha/splite"
import { Card } from "../components/Alpha/card"
import { Spotlight } from "../components/Alpha/spotlight"
import './AlphaSection.css'

const AlphaSection = () => {
  return (
    <section className="alpha-section">
      <Card className="custom-card border-none shadow-none">
        {/* ✅ Move corner-div here */}
        <div className="corner-div" />

        <div className="alpha-content">
          {/* Left side with Spotlight */}
          <div className="alpha-left">
            <Spotlight className="custom-spotlight" />
            <h1 className="alpha-title">Alpha</h1>
            <p className="alpha-description">Things I'll add</p>
          </div>

          <div className="alpha-right">
            <SplineScene
              scene="https://prod.spline.design/h1br2buJ-vXdr2Ep/scene.splinecode"
              className="spline-scene"
            />
          </div>
        </div>
      </Card>
    </section>
  )
}

export default AlphaSection
