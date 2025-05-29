import React from 'react'
import './mavPreview.css'
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Search, Plus, Menu } from 'lucide-react';

const mavPreview = () => {
    const [selectedCharacter, setSelectedCharacter] = useState(0);
      
      const characters = [
        {
          name: "Lunaris",
          title: "The Midnight Archer of the Celestial Order",
          description: "A skilled archer with mystical connections to lunar energies, known for their silent precision and tactical mind. They move like shadows under moonlight.",
          tags: ["archer", "celestial", "tactical"],
          creator: "@stargazerart",
          element: "Moon"
        },
        {
          name: "Emberheart",
          title: "Guardian of the Eternal Flame",
          description: "Born from volcanic essence, Emberheart protects the ancient fires that keep darkness at bay. Legends say their anger can ignite mountains.",
          tags: ["guardian", "fire", "ancient"],
          creator: "@flameforge",
          element: "Fire"
        },
        {
          name: "Whisperwillow",
          title: "The Forest Speaker",
          description: "A gentle druid who can communicate with plants and animals, healing the wounds between nature and civilization. Their magic brings life to barren lands.",
          tags: ["druid", "nature", "healer"],
          creator: "@leafweaver",
          element: "Nature"
        }
      ];
    
      const recentSearches = [
        "celestial characters",
        "fire elemental designs",
        "moonlight powers",
        "forest guardians",
        "mystical archers"
      ];
    
      const factions = [
        {
          name: "Dendra's Element",
          description: "Nature-aligned faction that protects ancient forests and wild places",
          icon: "🌿"
        },
        {
          name: "Sunmeru",
          description: "Warriors and scholars dedicated to celestial knowledge and solar magic",
          icon: "☀️"
        },
        {
          name: "Norovotai",
          description: "Shadow operatives who maintain balance between light and darkness",
          icon: "🌒"
        }
      ];
    
      const selectedChar = characters[selectedCharacter];
    
      const nextChar = () => {
        setSelectedCharacter((prev) => (prev + 1) % characters.length);
      };
    
      const prevChar = () => {
        setSelectedCharacter((prev) => (prev - 1 + characters.length) % characters.length);
      };
    
        // Color themes for different elements
      const getThemeColors = (element) => {
        switch(element) {
          case "Moon":
            return {
              bgColor: "bg-indigo-800",
              accentColor: "text-indigo-200",
              iconBg: "bg-indigo-900"
            };
          case "Fire":
            return {
              bgColor: "bg-red-700",
              accentColor: "text-red-200",
              iconBg: "bg-red-800"
            };
          case "Nature":
            return {
              bgColor: "bg-green-700",
              accentColor: "text-green-200",
              iconBg: "bg-green-800"
            };
          default:
            return {
              bgColor: "bg-teal-700",
              accentColor: "text-teal-200",
              iconBg: "bg-teal-800"
            };
        }
      };
    
       const elementBg = {
        Moon: "moon-bg",
        Fire: "fire-bg",
        Nature: "nature-bg",
      }[selectedChar.element] || "moon-bg";
    
  return (
    <div className="page">
      
      <section className={`character-showcase ${elementBg}`}>
        <button className="character-button character-prev" onClick={prevChar}>⟨</button>
        <div className="character-content">
          <div className="half">
            <span className="element-label">Element: {selectedChar.element}</span>
            <h2 className="character-name">{selectedChar.name}</h2>
            <p className="character-title">{selectedChar.title}</p>
            <p className="character-description">{selectedChar.description}</p>
            <div className="tag-list">
              {selectedChar.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
            <button className="read-more">Read More</button>
          </div>
          <div className="half">
            <div className="character-icon">
              {selectedChar.icon}
            </div>
          </div>
        </div>
        <button className="character-button character-next" onClick={nextChar}>⟩</button>
      </section>

      <main className="grid-wrapper">
        <section>
          <h2 className="section-title">
            Featured Artworks <span>🎨</span>
          </h2>
          {/* <div className="artwork-grid">
            {artworks.map((art, index) => (
              <div key={index} className="artwork-card">
                <div className="artwork-overlay"></div>
                <span className="artwork-creator">{art.creator}</span>
              </div>
            ))}
          </div> */}
        </section>

        <section>
          <h2 className="section-title">
            Search Results <span>🔍</span>
          </h2>
          <div className="search-result">
            {/* <CircleUserRound size={20} className="mr-2" /> */}
            <span>mavrick#dev</span>
          </div>
        </section>

        <section className="faction-container">
          {factions.map((faction, index) => (
            <div key={index} className="faction-card">
              <div className="faction-icon">{faction.icon}</div>
              <div>
                <h3>{faction.name}</h3>
                <p>{faction.description}</p>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  )
}

export default mavPreview