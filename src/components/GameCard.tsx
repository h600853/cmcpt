// components/GameCard.tsx

import React from "react";
import GameCardProps from "../types/GameCardProps";
import "./GameCard.css";

const GameCard: React.FC<GameCardProps> = ({
  title,
  genre,
  ageRating,
  image,
  triggerWarnings,
}) => {
  return (
    <div className="game-card">
      <img src={image || "/static/images/default-game-image.jpg"} alt={title} />
      <div className="game-card-content">
        <h5>{title}</h5>
        <p>
          <strong>Genre: </strong> {genre}
        </p>
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
                  <li key={index}>{warning}</li>
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
