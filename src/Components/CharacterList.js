import React from "react";
import CharacterCard from "..Components/CharacterCard";

const CharacterList = ({ characters, selectedCharacter, onCharacterClick, currentPage, totalPages, handlePreviousPage, handleNextPage }) => {
  return (
    <div className="character-list-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {characters.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              isSelected={selectedCharacter === character}
              onClick={onCharacterClick}
            />
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default CharacterList;