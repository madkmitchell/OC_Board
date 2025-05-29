import React, { useState } from 'react';
import './mavHome.css';

const characterData = [
  {
    id: 'levi-boone',
    name: 'Levi Boone',
    species: ['human', 'shifter'],
    affiliation: ['military', 'tribe'],
    status: 'active',
    role: ['protagonist', 'mentor'],
    summary: 'A combat medic turned rancher who carries a curse tied to ancestral land.'
  },
  {
    id: 'cynthia-boone',
    name: 'Cynthia Boone',
    species: ['human'],
    affiliation: ['tribe'],
    status: 'active',
    role: ['wildcard'],
    summary: 'Levi’s daughter, curious and drawn to the supernatural.'
  },
  // Add more character objects here
];

const MavHome = () => {
  const [selectedTag, setSelectedTag] = useState(null);
  const [openFolders, setOpenFolders] = useState({});

   const tags = {
    species: ['human', 'aberrant', 'ghost', 'god/goddess', 'entity', 'AI'],
    affiliation: ['military', 'tribe', 'ranch', 'fandom', 'killer', 'cult','competitive','independent', 'other'],
    status: ['alive', 'missing', 'deceased'],
    role: ['protagonist', 'mentor', 'wildcard']
  };

  const toggleFolder = (category) => {
    setOpenFolders((prev) => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const countCharacters = (category, value) => {
    return characterData.filter(char => {
      if (Array.isArray(char[category])) return char[category].includes(value);
      return char[category] === value;
    }).length;
  };

  return (
    <div className="page">
      <div className='top'>
        <div className="main-content">
        <h1 className="page-title">Character Showcase</h1>
        <p className="page-description">Explore the characters of our story, each with unique traits and backgrounds.</p>
        <div className='how-to-use'>
        <h4>HOW TO USE</h4>
        <ul className=''>
          <li>Click on a folder to expand it and see the tags.</li>
          <li>Click on a tag to view characters associated with it.</li>
          <li>Use the progress bars to see how many characters are associated with each tag.</li>
          <li>Explore different categories like Species, Affiliation, Status, and Role.</li>
        </ul>
        </div>
      </div>
      <div className="folders">
        {Object.entries(tags).map(([category, values]) => (
          <div key={category} className="folder-section">
            <div className="folder-label" onClick={() => toggleFolder(category)}>
              📁 <strong>{category} <img className='drop' src='/images/drop.png'></img></strong>
            </div>
            {openFolders[category] && (
              <ul className="file-list">
                {values.map(value => {
                  const count = countCharacters(category, value);
                  const max = characterData.length;
                  const percent = Math.round((count / max) * 100);

                  return (
                    <li key={value} className="file-item">
                      <a href={`/${category}/${value}`} className="file-link">
                        📄 <strong> {value} ({count})</strong>
                        <div className="progress-bar">
                          <div className="progress-fill" style={{ width: `${percent}%` }}></div>
                        </div>
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}

            
          </div>
        ))}
        <img className='warning' src='/images/warning.jpg' alt='warning Logo'></img>
        
      </div>

      
    </div>
    </div>
  );
};

export default MavHome;