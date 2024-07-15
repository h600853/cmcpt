import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";
import GameLibrary from "./components/GameLibrary";
import useFetchData from "./components/useFetchData";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./pages/About_Us";
import "./App.css";
import GameModal from "./components/GameModal";
import Navbar from "./components/Navbar";
import { Game } from "./types/Game";

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedAgeRating, setSelectedAgeRating] = useState("");
  const {
    data: databaseGames,
    loading,
    error,
  } = useFetchData<Game[]>({ endpoint: "games" });

  // For Modal:
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  const filteredGames = databaseGames!.filter((game) => {
    return (
      game.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedGenre
        ? game.genreSet.some((genre) => genre.name === selectedGenre)
        : true) &&
      (selectedAgeRating
        ? game.ageRating.age <= parseInt(selectedAgeRating)
        : true)
    );
  });

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/about" element={<AboutUs />} />
      </Routes>

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

export default App;
