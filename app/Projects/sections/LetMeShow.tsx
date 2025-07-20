import React from 'react';
import { SplineScene } from '../components/Alpha/splite';
import './CodeHiveSection.css'

const LetMeShow = () => {
  return (
    <main className='show-section'>
        <div className="show-corner-div" />
            <div className='spline-bg'>
            <SplineScene scene="https://prod.spline.design/33zWiK3HXQJnDsAl/scene.splinecode" />
            </div>
    </main>
  )
}

export default LetMeShow