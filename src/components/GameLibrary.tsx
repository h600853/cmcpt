// components/GameLibrary.tsx

import React, { MouseEventHandler } from "react";
import GameCard from "./GameCard";
import Game from "../types/Game";
import "./GameLibrary.css";

interface GameLibraryProps {
  games: Game[];
}

const GameLibrary: React.FC<GameLibraryProps> = ({ games }) => {

  const handleClick: MouseEventHandler<HTMLDivElement> = (event) => {
    
    const h5Elements = event.currentTarget.getElementsByTagName("h5");
    const gameName = h5Elements[0]?.textContent
    const gameClicked = games.find(game => game.title == gameName);
    
  };

  return (
    <div className="game-grid">
      {games.map((game) => (
        <GameCard
          key={game.game_id}
          title={game.title}
          genre={game.genre}
          ageRating={game.ageRating}
          image={game.image_url}
          triggerWarnings={game.triggerWarnings}
          onClick={handleClick}
        />
      ))}
    </div>
  );
};

export default GameLibrary;
