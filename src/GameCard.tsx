
const GameCard: React.FC<GameCardProps> = ({ game }) => {
    return (
      <div>
        <h2>{game.tittel}</h2>
        {game.bilde_url && <img src={game.bilde_url} alt={game.tittel} />}
        <p>Price: {game.pris}</p>
        <p>Size: {game.storrelse}</p>
        <p>Beskrivelse: {game.beskrivelse}</p>
        <p>UtgivelseDato: {game.utgivelse}</p>
      </div>
    );
  };
  
  export default GameCard;