import React, { useState } from "react";
import "./CharacterForm.css"; 

export default function CharacterForm() {
  const [characterData, setCharacterData] = useState({
    firstName: "",
    lastName: "",
    fullName: "",
    title: "",
    family: "",
    image: "",
    imageUrl: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCharacterData({
      ...characterData,
      [name]: value,
    });
  };

  const postCharacter = async (characterData) => {
    try {
      const response = await fetch('https://api-v6ywsuyy3a-uc.a.run.app/data/characters', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(characterData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const newCharacter = await response.json();
      console.log('New Character:', newCharacter);
      alert('New character added successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while adding a new character.');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    postCharacter(characterData);
  };

  return (
    <div className="character-form">
      <h2>Add a Character</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={characterData.firstName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={characterData.lastName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={characterData.fullName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={characterData.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="family"
          placeholder="Family"
          value={characterData.family}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image"
          value={characterData.image}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="imageUrl"
          placeholder="Image URL"
          value={characterData.imageUrl}
          onChange={handleInputChange}
        />
        <button type="submit">Add Character</button>
      </form>
    </div>
  );
}
