import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'

const home = () => {
  return (
    <div>
      <h1> CHOOSE A USER </h1>
      <div className='log'>
        <div className='user'>
          <Link to="/tom">
            <button className='tom'>
              <img className='userImg' src={'/images/pfp.jpg'} alt="mav" />
            </button>
          </Link>
          MAVERICK

          <Link to="/mavAbout"><button className='aboutButton'>ABOUT</button></Link>
          <Link to="/mavHome"><button className='userButton'>LOGIN</button></Link>
        </div>
        <div className='user'>
          <img className='userImg' src={'/images/cap.jpg'} alt="cap" />
          GATOR

          <Link to="/aboutGator"><button className='aboutButton'>ABOUT</button></Link>
          <Link to="/gatorHome"><button className='userButton'>Login</button></Link>
        </div>
      </div>
    </div>
  )
}

export default home