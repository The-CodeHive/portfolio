import React from 'react'

import './BrillxSection.css'
import { SplineScene } from '../components/Alpha/splite'

const BrillxSection = () => {
  return (
    <section className='brillx-section satoshi'>
        <div className="brillx-corner-div" />
              <div className="spline-bg">
                <SplineScene scene="https://prod.spline.design/xiTamitN5czVqKtG/scene.splinecode" />
              </div>
              <div className="content">
                Brillx
              </div>
    </section>
  )
}

export default BrillxSection