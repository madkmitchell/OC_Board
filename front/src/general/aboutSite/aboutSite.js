import React from 'react'
import './aboutSite.css'

const aboutSite = () => {
  return (
    <div className='aboutSite'>
      <div>
        <img className='stars' src={'/images/eyes.jpg'} alt="eyes" />
      </div>
      <div>
        <h1 className='aboutTitle'>About This Site</h1>
        <p className='aboutText'>This is just a simple website made by me <i>(Maverick)</i> and my friend <i>(Gator)</i> to show off our characters <i>(or at least some of them)</i>. This is also to give us a chance to flex <i>(hehe, flex joke)</i> our coding skills and especially styling. We hope in the future to add more people and their characters but for now it is just the two of us. :)</p>
        <p className='aboutText'>Feel free to stop by the guestbook if you want to leave a message and be memorialized forever on this stupid and silly site!</p>
        <p>
          <i> if you know the owner of any art, please let us know so we can remove or credit the artist since i found it on pinterest and that shit ain't 100% reliable </i>
        </p>
      </div>
      <div>
        <img className='divider' src={'/images/divider.png'} alt="divider" />
      </div>
    </div>
  )
}

export default aboutSite