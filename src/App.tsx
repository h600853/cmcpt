import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";
import GameLibrary from "./components/GameLibrary";
import Game from "./types/Game";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/About_Us";
import Navbar from "./components/Navbar";
const gamesData: Game[] = [
  {
    game_id: 1,
    title: "The Legend of Zelda",
    price: 200,
    genre: "Adventure",
    ageRating: "7",
    producer_id: 1,
    image_url:
      "https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg",
    triggerWarnings: ["Fantasy violence"],
  },
  {
    game_id: 2,
    title: "Call of Duty",
    genre: "Action",
    ageRating: "12",
    price: 200,
    producer_id: 2,
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1sWanrHu3WFjHpCnmcwJcd2O5X4OPY2Qfnw&usqp=CAU",
    triggerWarnings: ["Violence", "Strong language"],
  },
  {
    game_id: 3,
    title: "Final Fantasy VII",
    genre: "RPG",
    ageRating: "12, 7, 3",
    producer_id: 3,
    image_url: "https://upload.wikimedia.org/wikipedia/en/c/ce/FFVIIRemake.png",
    triggerWarnings: ["Fantasy violence", "Mild language"],
  },
  // Add more games as needed
];

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedAgeRating, setSelectedAgeRating] = useState("");

  const filteredGames = gamesData.filter((game) => {
    return (
      game.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedGenre ? game.genre === selectedGenre : true) &&
      (selectedAgeRating ? game.ageRating === selectedAgeRating : true)
    );
  });

  return (
    <>
    <Navbar></Navbar>
    <Routes>
    <Route path="/about" element={<AboutUs />} />
    </Routes>
    <div className="centered-container">
      <h1>Can My Child Play This?</h1>
      <p>Find out if it is safe for your child to play that game</p>
      <div style={{ marginBottom: "20px" }}>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <Filter
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
        selectedAgeRating={selectedAgeRating}
        setSelectedAgeRating={setSelectedAgeRating}
      />
      <GameLibrary games={filteredGames} />
    </div>
    </>
  );
};

export default App;
