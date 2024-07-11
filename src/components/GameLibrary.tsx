// components/GameLibrary.tsx

import React from "react";
import GameCard from "./GameCard";
import Game from "../types/Game";
import "./GameLibrary.css";

interface GameLibraryProps {
  games: Game[];
}

const GameLibrary: React.FC<GameLibraryProps> = ({ games }) => {
  return (
    <div className="game-grid">
      {games.map((game) => (
        <GameCard
          key={game.game_id}
          title={game.title}
          genre={game.genre}
          ageRating={game.ageRating}
          image={game.image}
          triggerWarnings={game.triggerWarnings}
        />
      ))}
    </div>
  );
};

export default GameLibrary;
