import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../Components/Fetchget.css'


// get characters filen 

export default function Fetchget() {
  const [characters, setCharacters] = useState([]);
  

  const fetchCharacters = async () => {
    try {
      const response = await axios.get('https://thronesapi.com/api/v2/Characters');
      setCharacters(response.characters)
      
    } catch (error) {
      console.log(error)
      
    }
  }

  useEffect(() => {
    fetchCharacters()
  }, []);

  return (
   <div className='character-list'>
    <h2>Karaktärer</h2>
    <ul>
    {characters.map((character) => (
          <li key={character.id}>{character.fullName}</li>
        ))}
    </ul>

   </div>
  )
}
