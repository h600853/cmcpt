
import Game from "./Game";

interface GameCardProps {
  title: string
  genre: string;
  ageRating: string; 
  triggerWarnings: string[];
  price?: number; 
  image: string; 
  size?: string; 
  description?: string; 
  publishing?: string; 
  producer_id?: number; 
  rating_id?: number; 
}

export default GameCardProps;
