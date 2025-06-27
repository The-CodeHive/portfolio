import React from 'react'
import PixelCard from './interactive-elements/PixelCard'

const FutureProjects = () => {
  return (
    <section className='futureprojects xanh'>
          <div className="video-background">
            <video
              className='vid-bg'
              src="/assets/videos/worksection.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
      <div className='future-projects-content'>
        <h1 className='future-project-heading jetbrains'> Future Projects </h1>
        <h3 className='future-heading-subheading xanhitalic'>
          Still saying “just one more side project”
        </h3>
        <p className='future-content-p satoshi'>
          Because clearly 3 hours of sleep and 19 open tabs wasn't enough. 
          Here's what I'm building instead of solving real problems like folding laundry.
        </p>
      </div>
      <div className='future-project-cards'>

        <PixelCard variant="yellow">
          <div className="pixel-content">
            <h2 className="pixel-title">😶‍🌫️ Grilld</h2>
            <div className="pixel-details">
              <p className="pixel-tagline satoshi">"Ace the interview — or at least get grilled by a robot first."</p>
              <ul className="pixel-list satoshi">
                <li>AI mock interviews</li>
                <li>Voice + emotion analysis</li>
                <li>Feedback archive</li>
                <li>Shareable report cards</li>
              </ul>
            </div>
          </div>
        </PixelCard>


        <PixelCard variant="blue">
          <div className="pixel-content">
            <h2 className="pixel-title">📹 Snipr</h2>
            <div className="pixel-details">
              <p className="pixel-tagline satoshi">"OBS is overkill. Zoom sucks."</p>
              <ul className="pixel-list satoshi">
                <li>1-click screen recording</li>
                <li>Sharable cloud links</li>
                <li>API + embeds</li>
                <li>Auto-blur sensitive data</li>
              </ul>
            </div>
          </div>
        </PixelCard>

        <PixelCard variant="pink">
          <div className="pixel-content">
            <h2 className="pixel-title  ">🏥 Healix</h2>
            <div className="pixel-details">
              <p className="pixel-tagline satoshi">"Book. Track. Heal. Text. Repeat."</p>
              <ul className="pixel-list satoshi">
                <li>Patient dashboard</li>
                <li>SMS reminders</li>
                <li>Doctor UI for chaos</li>
                <li>HIPAA-ish ✨vibes✨</li>
              </ul>
            </div>
          </div>
        </PixelCard>

      </div>

    </section>
  )
}

export default FutureProjects