import React from 'react'
import Brillx from './work/Brillx'
import CodeHive from './work/CodeHive'
import Alpha from './work/Alpha'
import ScrollReveal from './interactive-elements/ScrollReveal'
import GridDistortion from './interactive-elements/GridDistortion'

const Projects = () => {
  return (
    <>
    <div className='xanh work-content'>
      <div className="distortion-wrapper"> 
        <GridDistortion
          imageSrc="/images/1.jpg"
          grid={200}
          mouse={0.3}
          strength={0.15}
          relaxation={0.9}
        />
      </div>
      <div className='work-container satoshithin'>
        <div className='work-text'>
          <h1 className='work-heading xanh'>Stuff That Somehow Works </h1>
          <hr className="work-divider" />
          <div className='work-p'>
            <ScrollReveal
              baseOpacity={0.2}
              enableBlur={true}
              baseRotation={5}
              blurStrength={10}
            >
              I took some wild ideas, wrote way too much code, and questioned my choices at least a dozen times.
              Here's what came out the other side.
            </ScrollReveal>
                        
            
          </div>
        </div>
      </div>
    </div>
        <Brillx/>
        <CodeHive/>
        <Alpha />
    </>
  )
}

export default Projects