import React, { useState } from 'react';
import GameModal from '../components/GameModal';
import SearchBar from '../components/SearchBar';
import Filter from '../components/Filter';
import GameLibrary from '../components/GameLibrary';
import { Game } from '../types/Game';

interface MainPageProps {
  filteredGames: Game[];
}

const MainPage: React.FC<MainPageProps> = ({ filteredGames }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedAgeRating, setSelectedAgeRating] = useState("");
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  return (
    <>
      <div className="centered-container">
        <h1>Can My Child Play This?</h1>
        <p>Find out if it is safe for your child to play that game</p>

        <div style={{ marginBottom: "10px" }}>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>

        <Filter
          selectedGenre={selectedGenre}
          setSelectedGenre={setSelectedGenre}
          selectedAgeRating={selectedAgeRating}
          setSelectedAgeRating={setSelectedAgeRating}
        />
      </div>
      <GameLibrary games={filteredGames} onGameClick={setSelectedGame} />
      {selectedGame && (
        <GameModal game={selectedGame} onClose={() => setSelectedGame(null)} />
      )}
    </>
  );
};

export default MainPage;
