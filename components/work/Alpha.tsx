import React from 'react'
import DotGrid from '../interactive-elements/DotGrid'

const Alpha = () => {
  return (
    <section className='alpha xanh'>
      <div className='dot-bg-container'>
        <DotGrid
          dotSize={10}
          gap={15}
          baseColor="#30086e"
          activeColor="#FFCC00"
          proximity={200}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>
      <div className='alpha-content xanh'>Alpha</div>
    </section>
  )
}

export default Alpha