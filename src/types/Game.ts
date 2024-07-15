export interface AgeRating {
  age: number;
}

export interface Producer {
  name: string;
  id: number;
}

export interface Review {
  rating: number;
}

export interface TriggerWarning {
  description: string;
}

export interface Platform {
  name: string;
}

export interface Genre {
  name: string;
}

export interface Game {
  gameId: number
  title: string;
  price: number;
  size: string;
  description: string;
  releaseDate: string; // Use string type for ISO date format
  imageUrl: string // Allow for null value
  ageRating: AgeRating;
  producer: Producer;
  review: Review;
  triggerWarningSet: TriggerWarning[];
  platformSet: Platform[];
  genreSet: Genre[];
}
