
import { MouseEventHandler } from "react";
import {Genre, TriggerWarning} from "./Game";

interface GameCardProps {
  title: string
  genre: Genre[];
  ageRating: number; 
  triggerWarnings: TriggerWarning[];
  price?: number; 
  image: string; 
  size?: string; 
  description?: string; 
  publishing?: string; 
  producer_id?: number; 
  rating_id?: number; 
  onClick: MouseEventHandler<HTMLDivElement>;
}

export default GameCardProps;
