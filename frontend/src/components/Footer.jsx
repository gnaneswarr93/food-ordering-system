import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <Box
      component="footer"
      id="contact-footer" 
      sx={{
        backgroundColor: '#2c3e50',
        color: '#ecf0f1',
        py: 6,
      }}
    >
     
      <Container maxWidth={false}>
        <Grid container spacing={5}>
          {/* About Delicious & Opening Hours */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ color: '#e67e22', fontWeight: 'bold', mb: 2 }}>
              About Delicious
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              We are passionate about creating exceptional dining experiences with authentic flavors and premium ingredients.
            </Typography>
            <Box>
              <IconButton sx={{ color: 'white', backgroundColor: '#e67e22', '&:hover': { backgroundColor: '#d35400' }, mr: 1 }}>
                <FacebookIcon />
              </IconButton>
              <IconButton sx={{ color: 'white', backgroundColor: '#e67e22', '&:hover': { backgroundColor: '#d35400' }, mr: 1 }}>
                <TwitterIcon />
              </IconButton>
              <IconButton sx={{ color: 'white', backgroundColor: '#e67e22', '&:hover': { backgroundColor: '#d35400' } }}>
                <InstagramIcon />
              </IconButton>
            </Box>
            <Typography variant="h6" sx={{ color: '#e67e22', fontWeight: 'bold', mt: 4, mb: 2 }}>
              Opening Hours
            </Typography>
            <Typography variant="body2">Monday - Friday: 11:00 AM - 10:00 PM</Typography>
            <Typography variant="body2">Saturday - Sunday: 12:00 PM - 11:00 PM</Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" sx={{ color: '#e67e22', fontWeight: 'bold', mb: 2 }}>
              Quick Links
            </Typography>
            <Link component={RouterLink} to="/" variant="body2" display="block" color="inherit" sx={{ mb: 1, textDecoration: 'none', '&:hover': { color: '#e67e22' } }}>Home</Link>
            <Link component={RouterLink} to="/food" variant="body2" display="block" color="inherit" sx={{ mb: 1, textDecoration: 'none', '&:hover': { color: '#e67e22' } }}>Foods</Link>
            <Link component={RouterLink} to="/about" variant="body2" display="block" color="inherit" sx={{ mb: 1, textDecoration: 'none', '&:hover': { color: '#e67e22' } }}>About</Link>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ color: '#e67e22', fontWeight: 'bold', mb: 2 }}>
              Contact Info
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <LocationOnIcon sx={{ mr: 1, color: '#e67e22' }} />
              <Typography variant="body2">123 Food Street, City</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <PhoneIcon sx={{ mr: 1, color: '#e67e22' }} />
              <Typography variant="body2">+1 (555) 123-4567</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <EmailIcon sx={{ mr: 1, color: '#e67e22' }} />
              <Typography variant="body2">info@delicious.com</Typography>
            </Box>
          </Grid>
        </Grid>
        
        <Box sx={{ borderTop: '1px solid #34495e', mt: 5, pt: 3, textAlign: 'center' }}>
          <Typography variant="body2">
            © {new Date().getFullYear()} Delicious Restaurant. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;