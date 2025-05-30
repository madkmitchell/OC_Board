import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './mavPreview.css';

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

const MavPreview = () => {
  const { category, value } = useParams();

  const filteredCharacters = characterData.filter(char => {
    if (Array.isArray(char[category])) {
      return char[category].includes(value);
    }
    return char[category] === value;
  });

  return (
    <div className="preview-page">
      <div className="preview-header">
        <h2>Filtered by: <span className="highlight">{category}</span> → <span className="highlight">{value}</span></h2>
        <Link to="/mavHome" className="back-link">← Back to Mav Home</Link>
      </div>

      <div className="character-list">
        {filteredCharacters.length > 0 ? (
          filteredCharacters.map(char => (
            <div key={char.id} className="character-card">
              <h3>{char.name}</h3>
              <p><strong>Species:</strong> {char.species.join(', ')}</p>
              <p><strong>Affiliation:</strong> {char.affiliation.join(', ')}</p>
              <p><strong>Status:</strong> {char.status}</p>
              <p><strong>Role:</strong> {char.role.join(', ')}</p>
              <p>{char.summary}</p>
            </div>
          ))
        ) : (
          <p className="no-results">No characters match this filter.</p>
        )}
      </div>
    </div>
  );
};

export default MavPreview;
