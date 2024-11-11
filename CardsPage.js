import React from 'react';
import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Button,
  Grid
} from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ShareIcon from '@mui/icons-material/Share';

export default function CardsPage() {
  const cards = [
    { id: 1, title: 'Card Title 1', description: 'This is a description of the card.', image: '' },
    { id: 2, title: 'Card Title 2', description: 'This is another description of the card.', image: '' },
    { id: 3, title: 'Card Title 3', description: 'This is yet another description of the card.', image: '' },
  ];

  return (
    <div style={{ padding: 16 }}>
      <Typography variant="h4" gutterBottom>
        Cards Page
      </Typography>
      <Grid container spacing={3}>
        {cards.map((card) => (
          <Grid item xs={12} sm={6} md={4} key={card.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={card.image}
                alt={card.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" startIcon={<InfoOutlinedIcon />}>
                  Learn More
                </Button>
                <Button size="small" startIcon={<ShareIcon />}>
                  Share
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
