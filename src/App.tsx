import React, { useState } from "react";
import useFetchData from "./components/useFetchData";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./pages/About_Us";
import "./App.css";
import Navbar from "./components/Navbar";
import { Game } from "./types/Game";
import MainPage from "./pages/MainPage";

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedAgeRating, setSelectedAgeRating] = useState("");
  const {
    data: databaseGames,
    loading,
    error,
  } = useFetchData<Game[]>({ endpoint: "games" });

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
        <Route
          path="/"
          element={
            <MainPage
              filteredGames={filteredGames}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              selectedGenre={selectedGenre}
              setSelectedGenre={setSelectedGenre}
              selectedAgeRating={selectedAgeRating}
              setSelectedAgeRating={setSelectedAgeRating}
            />
          }
        />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </>
  );
};

export default App;
