import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Nav = () => {
  return (
    <nav className='nav'>
        <img className='sunMoon' src={'/images/sun.png'} alt="sun" />
      <ul className='nav-list'>
        <li className='link'><Link to="/">Home</Link></li>
        <li className='link'><Link to="/guestbook">Guestbook</Link></li>
        <li className='link'><Link to="/aboutSite">About</Link></li>
        <li className='link'><Link to="/apply">Apply</Link></li>
      </ul>
        <img className='sunMoon' src={'/images/moon.png'} alt="sun" />

    </nav>
  );
};

export default Nav;
