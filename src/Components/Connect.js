import React, { useEffect, useState } from "react";
import axios from "axios";

export default function FirebaseFunctionTest() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCharacters = async () => {
    try {
      const response = await axios.get(
        "https://api-v6ywsuyy3a-uc.a.run.app/data"
      );
      const responseData = response.data; 
      console.log("Data received from Firebase Function:", responseData); 
      setCharacters(responseData);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data from Firebase Function:", error);
      setIsLoading(false);
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
                    backgroundColor: "white",
                  }}
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
        )}
      </div>
    </div>
  );
}
