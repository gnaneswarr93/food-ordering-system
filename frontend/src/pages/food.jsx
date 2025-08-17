import React, { useState, useEffect } from 'react';
import FoodCard from '../components/FoodCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

import '../App.css';

function Food() {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenuItems = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('https://food-ordering-backend-ui66.onrender.com/menu-items/');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setMenuItems(data);
      } catch (error) {
        setError(
          `Failed to fetch menu. Please ensure the backend server is running. Details: ${error.message}`
        );
      } finally {
        setLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  const renderContent = () => {
    if (loading) {
      return (
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
          <CircularProgress />
        </Box>
      );
    }

    if (error) {
      return (
        <Alert severity="error" sx={{ mt: 4 }}>
          {error}
        </Alert>
      );
    }

    return (
      <Grid container spacing={4}  justifyContent= "center">
        {menuItems.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
            <FoodCard item={item} />
          </Grid>
        ))}
      </Grid>
    );
  };

  return (
    <div className="Food">
      <header className="App-header">
        <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold' ,pt:10}}>
          Menu
        </Typography>
        <Typography variant="h6" component="p" color="rgba(245, 147, 28, 0.8)">
          Delicious meals served fresh
        </Typography>
      </header>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {renderContent()}
      </Container>
    </div>
  );
}

export default Food;
