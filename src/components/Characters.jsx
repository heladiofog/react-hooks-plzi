import React, { useState, useEffect } from 'react';

const Characters = () => {
  // State
  const [characters, setCharacters] = useState([]);
  console.log('Rendering the component characters: >> ', characters);
  // Fetch characters
  const fetchCharacters = function () {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => setCharacters(data.results));
    // console.log('After fetching the component characters:>> ', characters);
  }
  // Effect used only once for this component (on mounting)
  useEffect(() => {
    // Anonymous function
    fetchCharacters();
    // console.log("[characters]", characters);
    // There is not any cleanup function by now
    return () => {
      console.log("Cleanning up the characters...");
    }
  }, []);

  return (
    <div className="Characters">
      {
        characters.map(character => (
          <div className="Character" key={character.id}>
            <img src={character.image} alt={`${character.name}`} className="Character-avatar" />
            <h2>{character.name}</h2>
            <h3>{character.species}</h3>
          </div>
        ))
      }
    </div>
  );
}

export default Characters;