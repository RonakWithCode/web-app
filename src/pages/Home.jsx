import React from 'react';
import HeroSection from '../Components/HeroSection';
import { WeAre } from '../Components/WeAre';
import ActionSection from '../Components/ActionSection';
import WeDo from '../Components/WeDo';

const Home = () => {
  return (
    
    <div className="relative">
      <HeroSection />
      <WeAre />
      <ActionSection />
      <WeDo />
      

    </div>
  );
};

export default Home;
