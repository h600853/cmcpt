
  interface Game {
    game_id: number; 
    title: string; 
    price?: number; 
    size?: string; 
    genre: string;
    image_url: string; 
    description?: string; 
    release?: string; 
    ageRating: string; 
    producer_id?: number;
    triggerWarnings: string[];
    rating_id?: number; 
    
};
export default Game;
