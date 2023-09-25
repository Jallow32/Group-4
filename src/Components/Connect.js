import React, { useEffect, useState } from "react";
import axios from "axios";




export default function FirebaseFunctionTest() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({
    username: "",
    text: "",
    rating: "",
  });


  const fetchCharacters = async () => {
    try {
      const response = await axios.get(
        "https://api-v6ywsuyy3a-uc.a.run.app/data"
      );
      const responseData = response.data;
      setCharacters(responseData);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data from Firebase Function:", error);
      setIsLoading(false);
    }
  };

  const fetchCharacterComments = async (characterId) => {
    try {
      const response = await axios.get(
        `https://api-v6ywsuyy3a-uc.a.run.app/data/${characterId}/comments`
      );
      const commentData = response.data;
      setComments(commentData);
    } catch (error) {
      console.error("Error fetching comments for character:", error);
    }
  };

  const handleCharacterClick = (character) => {
    setSelectedCharacter(character);
    fetchCharacterComments(character.id);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewComment({
      ...newComment,
      [name]: value,
    });
  };

  const submitComment = async () => {
    try {
      const response = await axios.post(
        `https://api-v6ywsuyy3a-uc.a.run.app/data/${selectedCharacter.id}/comments`,
        newComment
      );
      const comment = response.data;
      setComments([...comments, comment]);
      setNewComment({
        username: "",
        text: "",
        rating: "",
      });
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div
      className="fetchget-container"
      style={{
        fontFamily: "Roboto, sans-serif",
        backgroundColor: "steelblue",
        display: "flex",
        flexDirection: "row",
        height: "100vh",
      }}
    > 
      <div
        className="character-list-container"
        style={{
          flex: 1,
          padding: "16px",
        }}
      >
        {isLoading ? (
          <p className="fetchget-loading">Loading...</p>
        ) : (
          <>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                backgroundColor: "white",
              }}
            >
              <thead
                style={{
                  backgroundColor: "white",
                }}
              >
                <tr>
                  <th>ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Image</th>
                </tr>
              </thead>
              <tbody>
                {characters.map((character) => (
                  <tr
                    className="character-row"
                    key={character.id}
                    style={{
                      backgroundColor:
                        selectedCharacter && selectedCharacter.id === character.id
                          ? "lightblue"
                          : "white",
                      cursor: "pointer",
                    }}
                    onClick={() => handleCharacterClick(character)}
                  >
                    <td>{character.id}</td>
                    <td>{character.firstName}</td>
                    <td>{character.lastName}</td>
                    <td>
                      <img
                        src={character.imageUrl}
                        alt={character.firstName}
                        className="character-image"
                        style={{
                          width: "100%",
                          height: "auto",
                          maxWidth: "100px",
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {selectedCharacter && (
              <div>
                <h2>Selected Character: {selectedCharacter.firstName}</h2>
                <p>Title: {selectedCharacter.title}</p>
                <p>Family: {selectedCharacter.family}</p>
                <img
                  src={selectedCharacter.imageUrl}
                  alt={selectedCharacter.firstName}
                />
              </div>
            )}
            {comments.length > 0 && (
              <div>
                <h2>Reviews</h2>
                <ul>
                  {comments.map((comment, index) => (
                    <li key={index}>
                      <p>username: {comment.username}</p>
                      <p>review: {comment.text}</p>
                      <p>rating: {comment.rating}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {selectedCharacter && (
              <div>
                <h2>Add a Review</h2>
                <div>
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={newComment.username}
                    onChange={handleInputChange}
                  />
                </div>
                <textarea
  name="comment"
  placeholder="Review"
  value={newComment.comment}
  onChange={handleInputChange}
/>

            
                <div>
                  <input
                    type="number"
                    name="rating"
                    placeholder="Rating"
                    value={newComment.rating}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <button onClick={submitComment}>Submit</button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    
    </div>
  );
}
