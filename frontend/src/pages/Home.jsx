import React, { useEffect } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';


import HeroSection from '../components/HeroSection'; 
import FoodCategories from '../components/foodcategory';
import SearchCard from '../components/searchcard'; 
import Footer from '../components/Footer';

const Home = () => {
  
  const location = useLocation();
  const navigate = useNavigate();

  //  This 'useEffect' hook runs every time the page location changes
  useEffect(() => {
   
    if (location.state?.scrollToFooter) {
      const footer = document.getElementById('contact-footer');
      if (footer) {
       
        footer.scrollIntoView({ behavior: 'smooth' });
        navigate(location.pathname, { replace: true });
      }
    }
  }, [location, navigate]); 
  return (
    <div>
      {/* existing Home page content */}
      <HeroSection />
      <SearchCard />
      <FoodCategories />
      <Footer />
      
    </div>
  );
};

export default Home;
