import React from 'react'
import './about.css'
import Spiral from '@/components/interactive-elements/Spiral'
import FooterSecondary from '@/components/FooterSecondry'
const MoreAboutMe = () => {
  return (
    <main>
        <section className="More-About-section">
          <div className='More-About-spiral'>
            <Spiral width={1300} height={1300} dotRadius={8} />
          </div>
          <div className='More-About-name million-feeling'>Jagdeep Singh</div>
        <div className='More-About-Content'>
          <div className="More-About-heading ">
            <div className='line1'>A glowing screen, lines of code dancing in the dark.</div>
            <div className='line2'>From Concept to Code — Turning ideas into seamless digital experiences.</div>
          </div>

        </div>
      </section>
      <FooterSecondary />
    </main>
  )
}

export default MoreAboutMe