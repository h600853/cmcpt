// components/GameLibrary.tsx

import React, { MouseEventHandler } from "react";
import GameCard from "./GameCard";
import { Game } from "../types/Game";
import "./GameLibrary.css";

interface GameLibraryProps {
  games: Game[];
  onGameClick: (game: Game) => void; //Modal-greier
}

const GameLibrary: React.FC<GameLibraryProps> = ({ games, onGameClick }) => {
  const handleClick: MouseEventHandler<HTMLDivElement> = (event) => {
    const h5Elements = event.currentTarget.getElementsByTagName("h5");
    const gameName = h5Elements[0]?.textContent;
    const gameClicked = games.find((game) => game.title == gameName);
  };
  return (
    <div className="game-grid">
      {games.map((game) => (
        <GameCard
          key={game.gameId}
          title={game.title}
          genre={game.genreSet}
          ageRating={game.ageRating.age}
          image={game.imageUrl}
          triggerWarnings={game.triggerWarningSet}
          onClick={() => onGameClick(game)}
        />
      ))}
    </div>
  );
};

export default GameLibrary;
