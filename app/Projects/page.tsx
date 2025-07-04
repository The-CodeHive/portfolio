
import Spiral from '@/components/interactive-elements/Spiral'
import React from 'react'
import './project.css'

const Projects = () => {
  return (
    <main>
    <section className="Projects-main-section">
      <div className='Projects-main-spiral'>
        <Spiral width={1500} height={1500} dotRadius={10}  />
      </div>
      <div className='Projects-main-name million-feeling'>Jagdeep Singh</div>
      <div className='Projects-main-Content'>
        <div className="Projects-main-heading ">
          <h1 className='project-line1 satoshi'>Projects</h1>
          <p className='project-line2'>The projects will be added soon 🤞<br/>Depends on how much sleep I get ...<br/>Lowkey been awake for slightly more than 24hrs 🥱 </p>
        </div>

      </div>
    </section>
    </main>
  )
}

export default Projects