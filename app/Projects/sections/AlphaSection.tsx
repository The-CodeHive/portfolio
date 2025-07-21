'use client'

import { SplineScene } from "../components/Alpha/splite"
import { Card } from "../components/Alpha/card"
import { Spotlight } from "../components/Alpha/spotlight"
import './AlphaSection.css'

const AlphaSection = () => {
  return (
    <section className="alpha-section satoshi">
          <div className="alpha-corner-div" />
          <div className="spline-bg">
            <SplineScene scene="https://draft.spline.design/CSobRiqSEmGf5HlM/scene.splinecode" />
          </div>
          <div className="content">
            Alpha
          </div>
        </section>
  )
}

export default AlphaSection
