// components/GameCard.tsx

import React from "react";
import "./GameCard.css";
import GameCardProps from "../types/GameCardProps";

const GameCard: React.FC<GameCardProps> = ({
  title,
  genre,
  ageRating,
  image,
  triggerWarnings,
  onClick,
}) => {
  return (
    <div className="game-card" onClick={onClick}>
      <img src={image || "/static/images/default-game-image.jpg"} alt={title} />
      <div className="game-card-content">
        <h5>{title}</h5>
        <div>
          <strong className="genre-label">Genre:</strong>
          <ul className="genre-list">
            {genre.map((genreItem, index) => (
              <li key={index}>{genreItem.name}</li>
            ))}
          </ul>
        </div>
        <p>
          <strong>Age Rating: </strong> {ageRating}
        </p>
        {triggerWarnings && triggerWarnings.length > 0 && (
          <div className="trigger-warnings">
            <h6>Trigger Warnings:</h6>
            <ul>
              {triggerWarnings &&
              triggerWarnings.length >
                0 /*Hvis det ikke er noe triggerwarnings*/ ? (
                triggerWarnings.map((warning, index) => (
                  <li key={index}>{warning.description}</li>
                ))
              ) : (
                <li>No Trigger Warnings</li>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameCard;
