import React from "react";

interface FilterProps {
  selectedGenre: string;
  setSelectedGenre: (genre: string) => void;
  selectedAgeRating: string;
  setSelectedAgeRating: (rating: string) => void;
}

const Filter: React.FC<FilterProps> = ({
  selectedGenre,
  setSelectedGenre,
  selectedAgeRating,
  setSelectedAgeRating,
}) => {
  return (
    <div className="filter">
      <select
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
      >
        <option value="">All Genres</option>
        <option value="Action">Action</option>
        <option value="Adventure">Adventure</option>
        <option value="RPG">RPG</option>
        <option value="Strategy">Strategy</option>
        <option value="Simulation">Simulation</option>
      </select>

      <select
        value={selectedAgeRating}
        onChange={(e) => setSelectedAgeRating(e.target.value)}
      >
        <option value="">All Age Ratings</option>
        <option value="18">18</option>
        <option value="16">16</option>
        <option value="12">12</option>
        <option value="7">7</option>
        <option value="3">3</option>
      </select>
    </div>
  );
};

export default Filter;
