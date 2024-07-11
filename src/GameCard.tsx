import React from 'react';
import GameCardProps from './GameCardProps';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={game.bilde_url || "/static/images/cards/contemplative-reptile.jpg"}
        title={game.tittel}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {game.tittel}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <strong>Pris: </strong> {game.pris}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Størrelse: </strong> {game.storrelse}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Utgivelsedato: </strong> {game.utgivelse}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Beskrivelse: </strong> {game.beskrivelse}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default GameCard;
