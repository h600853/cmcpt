import React from 'react';
import logo from './logo.svg';
import './App.css';
import GameCard from './GameCard';
import Game from './types/Game';
const game: Game = {
  spill_id: 2,
  tittel: "Grand Theft Auto V",
  pris: 29.99,
  storrelse: "70 GB",
  beskrivelse: "Experience the world of Los Santos and Blaine County with Grand Theft Auto V. The critically acclaimed open-world game featuring a dynamic and diverse world, complete with a new generation of criminal adventures.",
  utgivelse: "2013-09-17",
  aldersgrense_id: 5,
  produsent_id: 102,
  anmeldelse_id: 305,
  bilde_url: "https://th.bing.com/th/id/OIP.uzsOwSbQyy1nq0u7AaiHYAHaHa?rs=1&pid=ImgDetMain"
};

function App() {
  return (
    
    <GameCard game={game} />
    
  );
}

export default App;
