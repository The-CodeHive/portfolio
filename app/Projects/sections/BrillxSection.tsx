import React from 'react'

import './BrillxSection.css'
import { SplineScene } from '../components/Alpha/splite'

const BrillxSection = () => {
  return (
    <section className='brillx-section satoshi'>
        <div className="brillx-corner-div" />
              <div className="spline-bg">
                <SplineScene scene="https://draft.spline.design/nUOWWw2JVwIodZnH/scene.splinecode" />
              </div>
              <div className="content-brillx">
                <h1 className='content-h1'>BrillX</h1>
                  <p className='content-sub petit'>Smarter learning starts with a single question.</p>

                  <div className='content-p xanh'>
                    BrillX is your AI-powered learning companion — smart, intuitive, and always ready.
                    Ask anything and get instant, crystal-clear answers tailored to you.<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="text-highlighter xanhitalic">&nbsp;Not just a chatbot — a knowledge engine that learns with you.&nbsp;</span>
                  </div>

                  <div className='content-btns'>
                    <a href="https://github.com/your-repo" target="_blank" className="brillx-btn">View on GitHub</a>
                    <a href="https://brillx.vercel.app" target="_blank" className="brillx-btn primary">Launch BrillX</a>
                  </div>
              </div>
    </section>
  )
}

export default BrillxSection