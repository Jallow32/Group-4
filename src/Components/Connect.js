import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";

export default function FirebaseFunctionTest() {
  const [response, setResponse] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  const fetchCharacters = async () => {
    try {
      const response = await axios.get(
        `https://api-v6ywsuyy3a-uc.a.run.app/data2?page=${currentPage}`
      );
      setResponse(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data from Firebase Function:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, [currentPage]);

  const handleCharacterClick = (character) => {
    setSelectedCharacter(character);
  };

  const totalPages = Math.ceil(response.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

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
                {response
                  .slice(
                    (currentPage - 1) * itemsPerPage,
                    currentPage * itemsPerPage
                  )
                  .map((character) => (
                    <React.Fragment key={character.id}>
                      <tr
                        className={`character-row ${
                          selectedCharacter === character ? "selected" : ""
                        }`}
                        onClick={() => handleCharacterClick(character)}
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
                            className={`character-image ${
                              selectedCharacter === character
                                ? "normal-image"
                                : "small-image"
                            }`}
                            style={{
                              width:
                                selectedCharacter === character
                                  ? "100%"
                                  : "50px",
                              height: "auto",
                              maxWidth: "100px",
                            }}
                          />
                        </td>
                      </tr>
                    </React.Fragment>
                  ))}
              </tbody>
            </table>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "16px",
              }}
            >
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <span style={{ margin: "0 10px" }}>
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
      <div
        className={`character-details-container ${
          selectedCharacter ? "visible" : ""
        }`}
        style={{
          flex: 1,
          padding: "16px",
          overflowY: "auto",
          backgroundColor: "transparent",
        }}
      >
        {selectedCharacter && (
          <Card>
            <CardHeader
              title={selectedCharacter.firstName}
              subheader={selectedCharacter.lastName}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary">
                Full Name: {selectedCharacter.fullName}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Title: {selectedCharacter.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Family: {selectedCharacter.family}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Image:{" "}
                <img
                  src={selectedCharacter.imageUrl}
                  alt={selectedCharacter.firstName}
                />
              </Typography>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
