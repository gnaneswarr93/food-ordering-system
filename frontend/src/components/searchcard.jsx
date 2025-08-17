import React from 'react';
import { Box, Card, CardContent, TextField, Button, Typography } from '@mui/material';

const SearchCard = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '30vh',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Card sx={{ width: 1000, p: 2, borderRadius: 3, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h6" align="center" gutterBottom>
            Find Your Favorite Dish
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
            <TextField
              fullWidth
              placeholder="Search for delicious food..."
              variant="outlined"
              size="small"
            />
            <Button
              variant="contained"
              color="warning"
              sx={{ textTransform: 'none' }}
            >
              Search
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SearchCard;
