import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemText 
} from '@mui/material';

const Navbar = () => {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleContactClick = () => {
    navigate('/', { state: { scrollToFooter: true } });
    setDrawerOpen(false); 
  };

  const navLinks = [
    { text: 'Home', path: '/' },
    { text: 'Menu', path: '/food' },
    { text: 'About', path: '/about' },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', width: 250 }}>
      <Typography variant="h6" sx={{ my: 2, fontWeight: 'bold', color: 'orange' }}>
        Delicious
      </Typography>
      <List>
        {navLinks.map((link) => (
          <ListItem key={link.text} disablePadding>
            <ListItemButton component={Link} to={link.path}>
              <ListItemText primary={link.text} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton onClick={handleContactClick}>
            <ListItemText primary="Contact" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "#fff", color: "black", boxShadow: 2 }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "orange" }}>
            Delicious
          </Typography>

          {/* Desktop Navigation Links */}
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navLinks.map((link) => (
              <Button key={link.text} sx={{ color: "black" }} component={Link} to={link.path}>
                {link.text}
              </Button>
            ))}
            <Button sx={{ color: "black" }} onClick={handleContactClick}>
              Contact
            </Button>
          </Box>

          {/* Mobile Hamburger Menu Icon */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' }, color: 'black' }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      
      {/* Mobile Drawer */}
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={drawerOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default Navbar;
