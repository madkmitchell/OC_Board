import React from 'react'
import './aboutGator.css'

const About = () => {
  return (
    <div className='aboutGator'>
      <div className='aboutGatorContainer'>
        <div className='aboutGatorText'>
          <div className='aboutGatorHeader'>
            <h1>ABOUT GATOR</h1>
            
    
              <img className='gatorIcon' src='https://i.pinimg.com/736x/d0/3a/7b/d03a7b690f23efffa93365cd10238beb.jpg' alt='the gator'/>
              <div className='gatorBlurb'>
                <p>what's good, i'm gator! i make the occasional OC, and i unfortunately i have more 
                    than i realized LMAO. so they get to chill here with Mav's characters now</p>
              </div>
            </div>

            <div className='gatorLinks'>
              <h2>POSSIBLE LOCATIONS</h2>
                <div className='buttonRow'>
                  <a href='https://garden-of-bones.crd.co/#/' target="_blank" rel="noopener noreferrer">
                    <button className='gatorButton'>Personal Carrd</button>
                  </a>
                </div>
            </div>
      </div>
    </div> 
  </div>

  )
}

export default About;