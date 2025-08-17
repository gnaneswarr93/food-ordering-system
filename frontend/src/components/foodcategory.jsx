import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent 
} from '@mui/material';

// Sample data for the food categories
const categories = [
  {
    emoji: '🍕',
    name: 'Pizza',
    description: 'Authentic Italian pizzas with fresh ingredients.',
  },
  {
    emoji: '🍔',
    name: 'Burgers',
    description: 'Juicy gourmet burgers made to perfection.',
  },
  {
    emoji: '🍜',
    name: 'Noodles',
    description: 'Asian-inspired noodle dishes, full of flavor.',
  },
  {
    emoji: '🌮',
    name: 'Tacos',
    description: 'Spicy and savory Mexican street tacos.',
  },
  {
    emoji: '🍰',
    name: 'Desserts',
    description: 'Sweet treats and cakes to end your meal.',
  },
  {
    emoji: '🥤',
    name: 'Drinks',
    description: 'Refreshing beverages, shakes, and juices.',
  },
];

const FoodCategories = () => {
  return (
    <Box sx={{ py: 6, backgroundColor: '#f7f9fc' }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          component="h2" 
          align="center" 
          sx={{ 
            fontWeight: 'bold', 
            color: '#2c3e50', 
            mb: 6 
          }}
        >
          Food Categories
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {categories.map((category, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card 
                sx={{
                  borderRadius: '12px',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.08)',
                  textAlign: 'center',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.12)',
                  }
                }}
              >
                <Box 
                  sx={{ 
                    background: 'linear-gradient(45deg, #ff8c00, #ffc107)', 
                    py: 4 
                  }}
                >
                  <Typography variant="h1" component="span" sx={{ fontSize: '4rem' }}>
                    {category.emoji}
                  </Typography>
                </Box>
                <CardContent sx={{ p: 3 }}>
                  <Typography 
                    variant="h5" 
                    component="h3" 
                    sx={{ fontWeight: 600, color: '#333', mb: 1 }}
                  >
                    {category.name}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {category.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FoodCategories;
