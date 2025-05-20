import React from 'react'
import './mavAbout.css'
import { Link } from 'react-router-dom'


const About = () => {
  return (
    <div className='mavAbout'>
      <div className='mavAboutContainer'>
        <div className='mavAboutText'>
          <div className='mavAboutHeader'>
            <h1>ABOUT MAVERICK</h1>

            <Link to="/tom">
              <button className='tom'>
                <img className='mavpfp' src={'/images/pfp.jpg'} alt="mav" />
              </button>
            </Link>

            <p>Howdy! I made this site because my OCs kept multiplying like rabbits with tragic backstories. Now they live here. Rent free.</p>
          </div>

          <div className="mavLinks">
            <h2>Find Me Elsewhere</h2>
            <div className="buttonRow">
              <a href="https://ckcomms.crd.co" target="_blank" rel="noopener noreferrer">
                <button className="mavButton">Commissions</button>
              </a>
              <a href="https://x.com/cowpoke_killer_" target="_blank" rel="noopener noreferrer">
                <button className="mavButton">Twitter/X</button>
              </a>
              <a href="https://www.pinterest.com/cowpoke_killer_/mi-oc/" target="_blank" rel="noopener noreferrer">
                <button className="mavButton">Pinterest</button>
              </a>

              <a href="https://roosterpersonal.carrd.co" target="_blank" rel="noopener noreferrer">
                <button className="mavButton">Personal</button>
              </a>
              <a href="https://open.spotify.com/user/22sg7yj7choozht5itftmfvkq?si=aea813ced8004043&nd=1&dlsi=4dda9acea44946fb" target="_blank" rel="noopener noreferrer">
                <button className="mavButton">Spotify</button>
              </a>
              <a href="https://discord.com/users/748590435307356241" target="_blank" rel="noopener noreferrer">
                <button className="mavButton">Discord</button>
              </a>
              <a href="https://steamcommunity.com/profiles/76561199255515814/" target="_blank" rel="noopener noreferrer">
                <button className="mavButton">Steam</button>
              </a>
              <a href="https://www.instagram.com/cowpoke_killer_" target="_blank" rel="noopener noreferrer">
                <button className="mavButton">Instagram</button>
              </a>
            </div>
          </div>
        </div>
        <div className='mavAboutImage'>
          <img className='bucksymbol' src={'/images/buck.png'} alt="mav" />
          <img className='dividerbuck' src={'/images/bucky.png'} alt="mav" />
          <img className='capsymbol' src={'/images/capSheild.png'} alt="mav" />

        </div>

        <div className='mavAboutExtra'>
          <div>
            <h2>What I Do</h2>
            <ul>
              <li>Master of lore.</li>
              <li>Destroyer of timelines.</li>
              <li>Collector of over-designed characters.</li>
              <li>Probably talking to my OCs in the shower.</li>
              <li>Can't spell normally</li>
            </ul>
          </div>
          {/* <div>
            <h2>🌪️ Meet the Crew</h2>
            <ul>
              <li><strong>Levi:</strong> Ex-medic cowboy haunted by blood and ghosts.</li>
              <li><strong>Cynthia:</strong> Storm-chasing teen with a rebellious streak.</li>
              <li><strong>Lucy:</strong> Tattoo artist and ghost-whisperer-in-training.</li>
            </ul>
          </div> */}
          <div>

            <h2>Tools I Use</h2>
            <ul>
              <li><strong>Draw:</strong> Procreate, Sketchbook</li>
              <li><strong>Write:</strong> Docs, Discord <i>(dont recommend)</i></li>
              <li><strong>Build:</strong> React, VS Code, dreams</li>
            </ul>
          </div>
          <div>

            <h2>What’s Coming Soon</h2>
            <ul>
              <li>Timeline of cursed ranch events</li>
              <li>Character Bios</li>
              <li>Web Comic Ideas <i>(doubtful)</i></li>
            </ul>
          </div>

        </div>
        <div>

          <footer className="mavFooter">
            <p>This is a love letter to characters who won’t leave me alone. Thanks for stopping by 🌾🌾</p>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default About;
