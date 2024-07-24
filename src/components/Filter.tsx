import React from "react";
import { useState, useEffect } from "react";

interface Genre {
  genreId: number;
  name: string;
}

interface AgeRating {
  ageRatingId: number;
  age: string;
}

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
  const [genres, setGenres] = useState<Genre[]>([]);
  const [ageRatings, setAgeRatings] = useState<AgeRating[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/genres")
      .then((response) => response.json())
      .then((data: Genre[]) => setGenres(data))
      .catch((error) => console.error("Error fetching genres:", error));

    fetch("http://localhost:8080/age-ratings")
      .then((response) => response.json())
      .then((data: AgeRating[]) => setAgeRatings(data))
      .catch((error) => console.error("Error fetching age ratings:", error));
  }, []);

  return (
    <div className="filter">
      <select
        id="genre"
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
      >
        <option value="">All Genres</option>
        {genres.map((genre) => (
          <option key={genre.genreId} value={genre.name}>
            {genre.name}
          </option>
        ))}
      </select>

      <select
        id="ageRating"
        value={selectedAgeRating}
        onChange={(e) => setSelectedAgeRating(e.target.value)}
      >
        <option value="">All Age Ratings</option>
        {ageRatings.map((ageRating) => (
          <option key={ageRating.ageRatingId} value={ageRating.age}>
            {ageRating.age}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
