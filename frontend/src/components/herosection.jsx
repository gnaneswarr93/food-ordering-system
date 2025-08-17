import React from "react";
import { Button, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <Box
      sx={{
        height: "80vh",
        background: "linear-gradient(135deg, rgba(228, 59, 17, 1), #fb7611ff)", // orange gradient
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "#fff",
        px: 2,
        py:6,
        borderRadius: "8px",
      }}
    >
      <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2 }}>
        Experience Culinary Excellence
      </Typography>
      <Typography variant="h6" sx={{ mb: 4 }}>
        Discover authentic flavors and exceptional dining experiences crafted by
        our master chefs
      </Typography>
      <Button
        variant="contained"
        component={Link}
      to="/food"
        sx={{
          backgroundColor: "#fff",
          color: "#ff7e5f",
          "&:hover": { backgroundColor: "#ffe6d5" },
        }}
      >
        Explore Menu
      </Button>
    </Box>
  );
};

export default HeroSection;
