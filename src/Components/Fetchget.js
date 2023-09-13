import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Fetchget() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCharacters = async () => {
    try {
      const response = await axios.get('https://thronesapi.com/api/v2/Characters');
      setCharacters(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    <h2>Karaktärer</h2> 
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {characters.map((character) => (
            <li
              key={character.id}
              style={{
                border: '1px solid #ccc',
                padding: '10px',
                margin: '10px',
                width: '200px',
                textAlign: 'center',
              }}
            >
              <p style={{ fontWeight: 'bold' }}>
                {character.fullName} {character.lastName}
              </p>
              <p style={{ fontStyle: 'italic' }}>{character.title}</p>
              <p style={{ color: '#777' }}>{character.family}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
