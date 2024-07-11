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
      </select>

      <select
        value={selectedAgeRating}
        onChange={(e) => setSelectedAgeRating(e.target.value)}
      >
        <option value="">All Age Ratings</option>
        <option value="18">E</option>
        <option value="16">E</option>
        <option value="12">T</option>
        <option value="7">M</option>
        <option value="3">E</option>
      </select>
    </div>
  );
};

export default Filter;
