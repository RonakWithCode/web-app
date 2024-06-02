import React from 'react'
import HeroSection from '../Components/HeroSection'
import WeDo from '../Components/WeDo'
import { WeAre } from '../Components/WeAre'

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
