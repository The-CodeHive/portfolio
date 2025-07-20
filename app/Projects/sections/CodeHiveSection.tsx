'use client'

import React from 'react'
import { SplineScene } from '../components/Alpha/splite' 
import './CodeHiveSection.css'

const CodeHiveSection = () => {
  return (
    <section className="codehive-section satoshi">
      {/* ✅ Add corner-div here */}
      <div className="corner-div" />

      <div className="spline-bg">
        <SplineScene scene="https://prod.spline.design/46KHOX7SZq88dKSm/scene.splinecode" />
      </div>
      <div className="content">
        CodeHive
      </div>
    </section>
  )
}

export default CodeHiveSection
