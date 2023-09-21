import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";

const CharacterCard = ({ character, isSelected, onClick }) => {
  return (
    <Card onClick={() => onClick(character)} className={`character-card ${isSelected ? "selected" : ""}`}>
      <CardHeader title={character.firstName} subheader={character.lastName} />
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          Full Name: {character.fullName}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Title: {character.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Family: {character.family}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Image: <img src={character.imageUrl} alt={character.firstName} />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CharacterCard;