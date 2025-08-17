import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Avatar, 
  Paper 
} from '@mui/material';

// Sample data for team members
const teamMembers = [
  {
    name: 'Gnane Doe',
    role: 'Founder & Head Chef',
    avatar: 'https://placehold.co/200x200/E67E22/white?text=GD',
    bio: 'With over 20 years of culinary experience, Gnane founded Delicious with a passion for authentic flavors and quality ingredients.'
  },
  {
    name: 'Jane Smith',
    role: 'Restaurant Manager',
    avatar: 'https://placehold.co/200x200/2C3E50/white?text=JS',
    bio: 'Jane ensures everything runs smoothly, from the kitchen to your table, providing an exceptional dining experience.'
  },
  {
    name: 'John Allen',
    role: 'Lead Waiter',
    avatar: 'https://placehold.co/200x200/3498DB/white?text=JA',
    bio: 'John leads our front-of-house team with a friendly smile and a commitment to excellent customer service.'
  }
];

const About = () => {
  return (
    <Box sx={{ backgroundColor: '#f7f9fc', py: 5 }}>
      {/* Header Section */}
      <Box 
        className="App-header" 
        sx={{ mb: 5, py: 6 }}
      >
        <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold' }}>
          About Delicious
        </Typography>
        <Typography variant="h6" component="p" color="rgba(255, 255, 255, 0.8)">
          Crafting memorable dining experiences since 2010.
        </Typography>
      </Box>

      <Container maxWidth="lg">
        {/* Our Story & Our Mission Section */}
        <Grid container spacing={6} sx={{ mb: 6 }} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', color: '#2c3e50', mb: 2 }}>
              Our Story
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
              Founded on a love for food and family, Delicious began as a small kitchen with a big dream: to bring authentic, high-quality meals to our community. We believe that food is more than just sustenance; it's a way to connect, celebrate, and create memories. Over the years, we've grown, but our core values of quality, authenticity, and hospitality have remained the same.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', color: '#2c3e50', mb: 2 }}>
              Our Mission
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
              Our mission is to be the heart of the community's dining scene. We are committed to using only the freshest, locally-sourced ingredients to craft dishes that are both delicious and wholesome. We strive to provide a warm and welcoming atmosphere where every guest feels like part of our family.
            </Typography>
          </Grid>
        </Grid>

        {/* Meet Our Team Section */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold', color: '#2c3e50', mb: 6 }}>
            Meet Our Team
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {teamMembers.map((member, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper 
                  elevation={3} 
                  sx={{ 
                    p: 3, 
                    borderRadius: '12px',
                    transition: 'transform 0.3s',
                    '&:hover': { transform: 'scale(1.05)' }
                  }}
                >
                  <Avatar 
                    alt={member.name} 
                    src={member.avatar} 
                    sx={{ width: 120, height: 120, margin: '0 auto 16px', border: '4px solid #e67e22' }} 
                  />
                  <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>
                    {member.name}
                  </Typography>
                  <Typography variant="subtitle1" color="primary" sx={{ color: '#e67e22', mb: 1 }}>
                    {member.role}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {member.bio}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
