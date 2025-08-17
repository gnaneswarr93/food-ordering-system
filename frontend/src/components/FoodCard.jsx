import React from 'react';


import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

const FoodCard = ({ item }) => {
  
  const vegStatusDotStyle = {
    height: '12px',
    width: '12px',
    borderRadius: '50%',
    backgroundColor: item.is_veg ? '#27ae60' : '#c0392b', // Green for veg, Red for non-veg
    border: '2px solid white',
    boxShadow: '0 0 5px rgba(0,0,0,0.4)',
  };

  return (
    <Card 
      sx={{ 
        height: '100%', 
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '12px',
        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)',
        }
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={item.image_url}
        alt={item.name}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        {/* Header section with Name and Veg/Non-Veg Dot */}
        <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 600, margin: 0 }}>
            {item.name}
          </Typography>
          <Box sx={vegStatusDotStyle} />
        </Stack>
        
        {/* Description */}
        <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1, lineHeight: 1.5 }}>
          {item.description}
        </Typography>
        
        {/* Price */}
        <Box mt={2}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#e67e22' }}>
            ₹{item.price.toFixed(2)}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default FoodCard;
